export type UpdateFuncASyncOrSync<ConfigType> = (
  | ((
    packageJson: ConfigType,
  ) => Promise<ConfigType>)
  | ((
    packageJson: ConfigType,
  ) => ConfigType)
);
