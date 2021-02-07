import { JSONSchema4 } from "https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/json-schema/index.d.ts";
import { Validator } from "https://cdn.skypack.dev/@cfworker/json-schema";

export type JSONSchemaV4 = JSONSchema4;

export function buildValidator(schema: JSONSchemaV4): Validator {
  return new Validator(schema);
}

export function validate<T>(validator: Validator, obj: T): boolean {
  const result = (validator as Validator).validate(obj);
  return result.valid;
}

export function validateThrow<T>(
  validator: Validator,
  obj: T,
  message: string,
) {
  const result = validator.validate(obj);

  if (result.valid === false) {
    const errorMessage = [
      message,
      ...result.errors.map((error: { error: string }) => error.error),
    ]
      .join("\n");

    throw new Error(
      errorMessage,
    );
  }
}
