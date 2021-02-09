import {
  assertEquals,
  assertThrowsAsync,
} from "https://deno.land/std@0.83.0/testing/asserts.ts";
import { script } from "./scripted.ts";

Deno.test("Works with a failed chain", async () => {
  const actual = await script(
    `
    # key:firstRun
    echo hello
    ls -z
    echo myfriend
  `,
    {
      dryRun: false,
      interactive: false,
      parallel: false,
      silent: false,
      throwOnError: false,
    },
  );
  const expected = {
    1: {
      output: "ls",
      status: {
        code: 1,
        success: false,
      },
    },
    firstRun: {
      output: "hello",
      status: {
        code: 0,
        success: true,
      },
    },
  };
  const crossPlatformOutputField = actual[1].output.split(":")[0];
  const actualCrossPlatform = {
    ...actual,
    "1": { ...actual[1], output: crossPlatformOutputField },
  };
  assertEquals(actualCrossPlatform, expected);
});

Deno.test("Tests silent execution", async () => {
  await assertThrowsAsync(async () =>
    await script(
      `
    # key:firstRun
    echo hello
    ls -z
    echo myfriend
  `,
      { throwOnError: true, silent: true },
    )
  );
});
Deno.test("Throws on a failed chain with throwOnError", async () => {
  await assertThrowsAsync(async () =>
    await script(
      `
    # key:firstRun
    echo hello
    ls -z
    echo myfriend
  `,
      { throwOnError: true },
    )
  );
});
Deno.test("Dry run", async () => {
  await script(
    `
    # key:firstRun
    echo hello
    echo myfriend
  `,
    { throwOnError: true },
  );
});
