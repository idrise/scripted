export interface ScriptedConfigurationOptions {
  /** If true, don't output to the console */
  silent: boolean;
  /** If true, throw if there is an error. This does not occur when running parallel. */
  throwOnError: boolean;
  /** For interactive CLI's they need to be bound to the console and capture is impossible. */
  interactive: boolean;
  /** Parallel flag allows commands in a script to run in parallel */
  parallel: boolean;
  /** Do a dry run. If flow changes based on output this will be unreliable. */
  dryRun: boolean;
}

const defaultConfiguration: ScriptedConfigurationOptions = {
  silent: false,
  throwOnError: false,
  interactive: false,
  parallel: false,
  dryRun: false,
};

let currentConfiguration: ScriptedConfigurationOptions = {
  ...defaultConfiguration,
};

export function resetConfiguration(): void {
  currentConfiguration = { ...defaultConfiguration };
}

export function setConfiguration(
  configurationOptions: Partial<ScriptedConfigurationOptions>,
): void {
  currentConfiguration = { ...currentConfiguration, ...configurationOptions };
}

export function getConfiguration(): ScriptedConfigurationOptions {
  return currentConfiguration;
}
