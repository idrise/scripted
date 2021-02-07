import * as scripted from "../../src/scripted.ts";

import { Command } from "https://cdn.depjs.com/cmd/mod.ts";

const program = new Command(/* name */);

program.version("0.0.1");

program
  .option("-d, --dry", "enable dry mode, commands are not executed");

const parameters = program.parse(Deno.args);
console.log(parameters);

const result = await scripted.script(
  `
  # os:windows
  echo I am running windows
  # os:darwin
  echo I am running macOS
  # os:linux
  echo I am running Linux
  # key:echoOutput 
  echo Capture this as a key in the returned object 'echoOutput'
  echo A little error will not throw because of configuration.
  ls -z
  # interactive
  eslint --init
`,
  {
    silent: false,
    throwOnError: false,
    dryRun: parameters.dry ? true : false,
  },
);
console.log(result);
