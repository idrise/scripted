import {
  assert,
  assertEquals,
  assertThrows,
  assertThrowsAsync,
} from "https://deno.land/std/testing/asserts.ts";

import { packageJson } from "./packageJson.ts";
import { PackageJson } from "./schemaTypes.ts";

const createTmpPackageJson: () => Promise<string> = async () => {
  const tmpFile = await Deno.makeTempFile();
  await Deno.writeTextFile(tmpFile,`{
    "name": "scripted",
    "version": "1.0.0",
    "description": "5",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "Jimmy",
    "license": "ISC",
    "newParam": "hello"
  }
  `)
  return tmpFile;
};

Deno.test("Updates the description async", async () => {
  const tmpPackageJson = await createTmpPackageJson();

  await packageJson(
    tmpPackageJson,
    // deno-lint-ignore require-await
    async (packageJson) => ({ ...packageJson, description: "hello" }),
  );
  assertEquals(
    await Deno.readTextFile(tmpPackageJson),
    `{
  "name": "scripted",
  "version": "1.0.0",
  "description": "hello",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "Jimmy",
  "license": "ISC",
  "newParam": "hello"
}`,
  );
  await Deno.remove(tmpPackageJson);
});

Deno.test("Updates the description sync", async (): Promise<void> => {
  const tmpPackageJson = await createTmpPackageJson();

  await packageJson(
    tmpPackageJson,
    (packageJson) => ({ ...packageJson, description: "hello" }),
  );
  assertEquals(
    await Deno.readTextFile(tmpPackageJson),
    `{
  "name": "scripted",
  "version": "1.0.0",
  "description": "hello",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "Jimmy",
  "license": "ISC",
  "newParam": "hello"
}`,
  );
  await Deno.remove(tmpPackageJson);
});

Deno.test("Fails to update a script with invalid package json", async () => {
  const tmpPackageJson = await createTmpPackageJson();
  await assertThrowsAsync(
    async () =>
      await packageJson(
        tmpPackageJson,
        (packageJson: PackageJson) => ({
          ...packageJson,
          scripts: {
            ...packageJson.scripts,
            main: 5,
          } as unknown as PackageJson,
        }),
      ),
  );
  await Deno.remove(tmpPackageJson);
});
