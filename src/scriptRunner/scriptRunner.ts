import { Script } from "./scriptParser.ts";
import {
  getConfiguration,
  ScriptedConfigurationOptions,
} from "../configuration/configuration.ts";
import { reduceSeries } from "./reduceSeries.ts";
import {
  sh,
  shDryRun,
  ShellResult,
  shInteractive,
  shSilent,
} from "../platform/deno/exec.ts";
import { platform } from "../platform/deno/os.ts";

type ShellResponses = Record<string, ShellResult>;

function shouldScriptBeExecutedOnCurrentOS(script: Script) {
  return script.os === undefined || script.os.includes(platform());
}

function buildShellPromiseFunction(
  script: Script,
  configuration: ScriptedConfigurationOptions,
): () => Promise<ShellResult> {
  const shellCommand = chooseShellFunction(configuration, script);
  return async () => {
    const command = await shellCommand(script.cmd);
    if (command.status.success === false) {
      if (configuration.throwOnError) {
        throw new Error("Command failed");
      }
    }
    return command;
  };
}

function mapScriptsToShellFunctionsAndOutputKey(
  scripts: Script[],
  configuration: ScriptedConfigurationOptions,
): ResultKeyAndShellPromise[] {
  const promiseList: (ResultKeyAndShellPromise | undefined)[] = scripts.map(
    (script, index) => {
      const resultKey = script.key || `${index}`;
      if (!shouldScriptBeExecutedOnCurrentOS(script)) {
        return undefined;
      }
      return {
        resultKey,
        shellPromiseFunction: buildShellPromiseFunction(script, configuration),
      };
    },
  );
  const filteredPromiseList: ResultKeyAndShellPromise[] = promiseList.filter(
    (a) => a !== undefined,
  ) as ResultKeyAndShellPromise[];
  return filteredPromiseList;
}
export async function scriptRunner(
  scripts: Script[],
  configuration: Partial<ScriptedConfigurationOptions>,
): Promise<ShellResponses> {
  const combinedConfiguration = {
    ...getConfiguration(),
    ...configuration,
  };

  const filteredPromiseList: ResultKeyAndShellPromise[] =
    mapScriptsToShellFunctionsAndOutputKey(scripts, combinedConfiguration);

  const executeScript = combinedConfiguration.parallel
    ? executeScriptPromisesInParallel
    : executeScriptPromisesInSequence;

  return (await executeScript(filteredPromiseList));
}
function chooseShellFunction(
  configuration: ScriptedConfigurationOptions,
  script: Script,
): (cmd: string) => Promise<ShellResult> {
  const silentOrNoisyFunction = configuration.silent ? shSilent : sh;
  const shellCommand = configuration.interactive
    ? shInteractive
    : silentOrNoisyFunction;
  if (configuration.dryRun) {
    return shDryRun;
  }
  return shellCommand;
}

async function executeScriptPromisesInSequence(
  promiseList: ResultKeyAndShellPromise[],
) {
  return (await reduceSeries<
    ResultKeyAndShellPromise,
    { result: Record<string, ShellResult>; break: boolean }
  >(promiseList, async (acc, element, index) => {
    if (acc.break === true) {
      return acc;
    }
    const result = await (element.shellPromiseFunction());

    return {
      ...acc,
      result: { ...acc.result, [element.resultKey]: result },
      break: !result.status.success,
    };
  }, { result: {}, break: false })).result;
}

export interface ResultKeyAndShellPromise {
  resultKey: string;
  shellPromiseFunction: () => Promise<ShellResult>;
}

async function executeScriptPromisesInParallel(
  scriptShellPromiseList: ResultKeyAndShellPromise[],
) {
  const results = await Promise.all(
    scriptShellPromiseList.map((d) => d.shellPromiseFunction()),
  );

  return results.reduce((acc, element, index) => {
    const resultKey = scriptShellPromiseList[index].resultKey;
    return {
      ...acc,
      result: { ...acc.result, [resultKey]: element },
    };
  }, { result: {}, break: false }).result;
}
