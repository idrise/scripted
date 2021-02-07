import os from "https://deno.land/x/dos@v0.1.0/mod.ts";

export function platform(): "windows" | "linux" | "mac" {
  return os.platform();
}
