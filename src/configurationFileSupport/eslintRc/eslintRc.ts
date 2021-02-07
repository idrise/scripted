import { UpdateFuncASyncOrSync } from "../configurationSupportTypes.ts";
import { jsonConfigWithJsonSchema } from "../jsonConfig.ts";
import { eslintRcSchema } from "./schema.ts";
import { ESLintRC } from "./schemaTypes.ts";

export async function eslintRc(
  path: string,
  updateFunc: UpdateFuncASyncOrSync<ESLintRC>,
): Promise<boolean> {
  return await jsonConfigWithJsonSchema(path, updateFunc, eslintRcSchema);
}
