import {
  getConfiguration,
  ScriptedConfigurationOptions,
} from "./configuration/configuration.ts";
import { ShellResult } from "./platform/deno/exec.ts";
import { scriptParser } from "./scriptRunner/scriptParser.ts";
import { scriptRunner } from "./scriptRunner/scriptRunner.ts";

export { packageJson } from "./configurationFileSupport/packageJson/packageJson.ts";
export { eslintRc } from "./configurationFileSupport/eslintRc/eslintRc.ts";

export interface ScriptResult {
  [scriptIndexOrKey: string]: ShellResult;
}

/**
 * Runs a scripted script 
 * ```
 * 
 * ```
 * @export
 * @param {string} script
 * @param {Partial<ScriptedConfigurationOptions>} [options={}]
 * @return {*}  {Promise<ScriptResult>}
 */
export async function script(
  script: string,
  options: Partial<ScriptedConfigurationOptions> = {},
): Promise<ScriptResult> {
  return await scriptRunner(
    scriptParser(script),
    { ...getConfiguration(), ...options },
  );
}
