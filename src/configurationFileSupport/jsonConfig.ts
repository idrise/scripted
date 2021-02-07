import { deepEquals } from "../platform/deno/deepEquals.ts";
import {
  buildValidator,
  JSONSchemaV4,
  validateThrow,
} from "../platform/deno/schemaValidate.ts";

type ConfigTransformer<ConfigType> = (
  | ((
    configJson: ConfigType,
  ) => Promise<ConfigType>)
  | ((
    configJson: ConfigType,
  ) => ConfigType)
);

type ConfigValidator<ConfigType> = (
  | ((
    configJson: ConfigType,
  ) => Promise<boolean>)
  | ((
    configJson: ConfigType,
  ) => boolean)
);

export async function jsonConfig<ConfigType>(
  path: string,
  updateFunction: ConfigTransformer<ConfigType>,
  validateFunction: ConfigValidator<ConfigType> = () => true,
): Promise<boolean> {
  const file = await Deno.readTextFile(path);

  const jsonConfigParsedObj: ConfigType = JSON.parse(file);
  const isOriginalValid = await validateFunction(jsonConfigParsedObj);
  if (!isOriginalValid) {
    return false;
  }
  const updatedJsonConfigParsedObj = await updateFunction(jsonConfigParsedObj);

  const isUpdatedValid = await validateFunction(updatedJsonConfigParsedObj);

  if (!isUpdatedValid) {
    return false;
  }

  if (!deepEquals(updatedJsonConfigParsedObj, jsonConfigParsedObj)) {
    await Deno.writeTextFile(
      path,
      JSON.stringify(updatedJsonConfigParsedObj, null, 2),
    );
    return true;
  }
  return false;
}
// TODO: Get the typescript for json schema and replace unknown
export async function jsonConfigWithJsonSchema<ConfigType>(
  path: string,
  updateFunction: ConfigTransformer<ConfigType>,
  schema: JSONSchemaV4,
): Promise<boolean> {
  const validator = buildValidator(schema);

  return await jsonConfig<ConfigType>(path, updateFunction, (obj) => {
    validateThrow(
      validator,
      obj,
      `Schema fail`,
    );
    return true;
  });
}
