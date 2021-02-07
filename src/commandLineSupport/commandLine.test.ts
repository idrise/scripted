import {
  assert,
  assertEquals,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
import { identifyToken, parseDescribe } from "./commandLine.ts";

Deno.test("Parses tokens correctly", () => {
  const actual = parseDescribe(`
  hello\t
  there   world
  `);
  const expected = ["hello", "there", "world"];
  assertEquals(actual, expected);
});

Deno.test("Works with a switch as second parameter", () => {
  const actual = identifyToken("--hello", 1);
  const expected = {type:"switch",key:"hello",param:undefined};
  assertEquals(actual, expected);
});

Deno.test("Works with a switch as first parameter", () => {
  const actual = identifyToken("--hello=true", 0);
  const expected = {type:"switch",key:"hello",param:'true'};
  assertEquals(actual, expected);
});

Deno.test("Works with a key value pair", () => {
  const actual = identifyToken("--hello", 1);
  const expected = {type:"switch",key:"hello",param:undefined};
  assertEquals(actual, expected);
});
Deno.test("Works with a fixed parameter", () => {
  const actual = identifyToken("[hello]", 1);
  const expected = {type: "fixedparam"};
  assertEquals(actual, expected);
});

Deno.test("Works with a command", () => {
  const actual = identifyToken("build", 0);
  const expected = {type: "command"};
  assertEquals(actual, expected);
});

Deno.test("Command line works", () => {
  const actual = parseDescribe("build [inputFiles] [outputFile] --verbose=true")
    .map((a, i) => identifyToken(a, i));
  const expected = [
    {type:"command"},
    {type:"fixedparam"},
    {type:"fixedparam"},
    {type:"switch",key:"verbose",param:"true"},
  ];
  assertEquals(actual, expected);
});
