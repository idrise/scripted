import { UpdateFuncASyncOrSync } from "../configurationSupportTypes.ts";
import { jsonConfigWithJsonSchema } from "../jsonConfig.ts";
import { packageJsonSchema } from "./schema.ts";
import { PackageJson } from "./schemaTypes.ts";

export async function packageJson(
  path: string,
  updateFunc: UpdateFuncASyncOrSync<PackageJson>,
): Promise<boolean> {
  return await jsonConfigWithJsonSchema(path, updateFunc, packageJsonSchema);
}
