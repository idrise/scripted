import {
  getConfiguration,
  resetConfiguration,
  setConfiguration,
} from "./configuration.ts";
import {
  assert,
  assertEquals,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";

Deno.test("Works with a key value pair", () => {
  const actual = getConfiguration();
  const expected = {
    dryRun: false,
    interactive: false,
    parallel: false,
    silent: false,
    throwOnError: false,
  };
  assertEquals(actual, expected);
});

Deno.test("Works with a key value pair", () => {
  setConfiguration({ interactive: true });
  const actual = getConfiguration();
  const expected = {
    dryRun: false,
    interactive: true,
    parallel: false,
    silent: false,
    throwOnError: false,
  };
  assertEquals(actual, expected);
  resetConfiguration();
});
