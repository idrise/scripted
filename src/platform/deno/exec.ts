import { readLines } from "https://deno.land/std@0.84.0/io/mod.ts";
import { encoder } from "https://deno.land/std@0.84.0/encoding/utf8.ts";
// import { v4 } from "https://deno.land/std@0.84.0/uuid/mod.ts";

function splitCommand(command: string): string[] {
  var myRegexp = /[^\s"]+|"([^"]*)"/gi;
  var splits = [];

  let match;
  do {
    // Each call to exec returns the next regex match as an array
    match = myRegexp.exec(command);
    if (match != null) {
      // Index 1 in the array is the captured group if it exists
      // Index 0 is the matched text, which we use if no captured group exists
      splits.push(match[1] ? match[1] : match[0]);
    }
  } while (match != null);

  return splits;
}

export enum OutputMode {
  None = 0, // no output, just run the command
  StdOut, // dump the output to stdout
  Capture, // capture the output and return it
  Tee, // both dump and capture the output
}

export interface IExecStatus {
  code: number;
  success: boolean;
}

export interface IExecResponse {
  status: IExecStatus;
  output: string;
}

interface IOptions {
  output?: OutputMode;
  verbose?: boolean;
  continueOnError?: boolean;
}
async function redirectOutput(
  stream: Deno.Reader,
  options: IOptions,
): Promise<string> {
  let response = "";
  for await (const line of readLines(stream)) {
    if (
      options.output == OutputMode.Capture ||
      options.output == OutputMode.Tee
    ) {
      response = response + line;
    }

    if (
      options.output == OutputMode.StdOut ||
      options.output == OutputMode.Tee
    ) {
      if (line.trim().length > 0) {
        Deno.stdout.writeSync(encoder.encode(line + "\n"));
      }
    }
  }
  return response;
}
export const exec = async (
  command: string,
  options: IOptions = { output: OutputMode.StdOut, verbose: false },
): Promise<IExecResponse> => {
  const splits = splitCommand(command);

  const p = Deno.run({ cmd: splits, stdout: "piped", stderr: "piped" });

  let response = "";

  if (p && options.output != OutputMode.None) {
    response += (await redirectOutput(p.stdout, options)) +
      (await redirectOutput(p.stderr, options));
  }

  const status = await p.status();
  p.stdout?.close();
  p.stderr?.close();
  p.close();

  const result = {
    status: {
      code: status.code,
      success: status.success,
    },
    output: response.trim(),
  };

  return result;
};

export type ShellResult = IExecResponse;

// deno-lint-ignore require-await
export async function shDryRun(cmd: string): Promise<IExecResponse> {
  console.log(cmd);

  return {
    status: {
      code: 0,
      success: true,
    },
    output: "",
  };
}

export function shSilent(cmd: string): Promise<IExecResponse> {
  return exec(cmd, { output: OutputMode.Capture });
}

export function sh(cmd: string): Promise<IExecResponse> {
  return exec(cmd, { output: OutputMode.Tee });
}

export function shInteractive(cmd: string): Promise<IExecResponse> {
  return exec(cmd);
}
