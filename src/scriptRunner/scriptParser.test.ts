import {
  assert,
  assertEquals,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
import { Script, scriptParser } from "./scriptParser.ts";

Deno.test("Works with lots of whitespace", () => {
  const actual = scriptParser(`   
     
          
  `);
  const expected: Script[] = [];
  assertEquals(actual, expected);
});

Deno.test("Works with an empty script", () => {
  const actual = scriptParser("");
  const expected: Script[] = [];
  assertEquals(actual, expected);
});

Deno.test("Parameters only affect the next script.", () => {
  const actual = scriptParser(`
  # hello:list,of,items
  # there:another
  echo hello
  echo hello2
  `);
  const expected = [
    {
      cmd: "echo hello",
      hello: ["list", "of", "items"],
      there: "another",
    },
    {
      cmd: "echo hello2",
    },
  ];
  assertEquals(actual, expected);
});

Deno.test("Works with multiple comment lines", () => {
  const actual = scriptParser(`
  # hello:list,of,items
  # there:another
  echo hello
  `);
  const expected = [
    {
      cmd: "echo hello",
      hello: ["list", "of", "items"],
      there: "another",
    },
  ];
  assertEquals(actual, expected);
});

Deno.test("Works with comma separated value", () => {
  const actual = scriptParser(`
  # hello:list,of,items
  echo hello
  `);
  const expected = [
    {
      cmd: "echo hello",
      hello: ["list", "of", "items"],
    },
  ];
  assertEquals(actual, expected);
});

Deno.test("Works with a key only", () => {
  const actual = scriptParser(`
  # hello
  echo hello
  `);
  const expected = [
    {
      cmd: "echo hello",
      hello: "true",
    },
  ];
  assertEquals(actual, expected);
});

Deno.test("Works with a key value pair", () => {
  const actual = scriptParser(`
  # hello:there
  echo hello
  `);
  const expected = [
    {
      cmd: "echo hello",
      hello: "there",
    },
  ];
  assertEquals(actual, expected);
});

Deno.test("Throws when invalid", () => {
  assertThrows((): void => {
    scriptParser(`
      # hello:there:bad
      `);
  });
  assertThrows((): void => {
    scriptParser(`
      # hello:there:bad
      `);
  });
});
