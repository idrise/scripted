import * as path from "https://deno.land/std/path/mod.ts";

export function sourceFolderPath(url: string) {
  return path.dirname(path.fromFileUrl(url));
}
