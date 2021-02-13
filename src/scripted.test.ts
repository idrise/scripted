import {
  assert,
  assertEquals,
  assertStringIncludes,
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
  const expectedShape = {
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
  const actualFirstRun = actual.firstRun;
  const actualLsRun = actual[1];

  assertStringIncludes(actualLsRun.output, "ls");
  assert(actualLsRun.status.code > 0);
  assert(actualLsRun.status.success === false);

  assertEquals(actualFirstRun.output, "hello");
  assert(actualFirstRun.status.code === 0);
  assert(actualFirstRun.status.success === true);
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
