![Deno](https://github.com/idrise/scripted/workflows/Deno/badge.svg) ![deno-code-coverage](https://img.shields.io/badge/code%20coverage-90.95%25-brightgreen.svg)

# Scripted

Build simple and powerful cross-platform scripts.

# Get Started

Install Deno for your first win
```bash
brew install deno
```

<details>
  <summary>Create your first script!</summary>
  <p>
  <br/>

## Let's make a script to perform a simple directory listing with details.

test.ts
```ts
import {script} from "https://raw.githubusercontent.com/idrise/scripted/main/mod.ts"

await script(`
  ls -al
`);
```

Run it!

```
deno -A ./test.ts
```

```
total 8
drwxr-xr-x   4 delliott  staff   128 13 Feb 11:08 .
drwxr-xr-x+ 68 delliott  staff  2176 13 Feb 13:49 ..
-rw-r--r--   1 delliott  staff   190 13 Feb 11:59 test.ts
```
</p></details>

<br/>

<details>
  <summary>Create your first cross platform script!</summary>
  <p>

test.ts

```ts
import {script} from "https://raw.githubusercontent.com/idrise/scripted/main/mod.ts"

await script(`
  # os:linux,darwin
  ls -al
  # os:windows
  dir
`);
```

Run it!

```
deno -A ./test.ts
```
Mac and linux
```
total 8
drwxr-xr-x   4 delliott  staff   128 13 Feb 11:08 .
drwxr-xr-x+ 68 delliott  staff  2176 13 Feb 13:49 ..
-rw-r--r--   1 delliott  staff   190 13 Feb 11:59 test.ts
```
Windows
```

13/02/2021     11:08  <DIR>         .
13/02/2021     14:46  <DIR>         ..
13/02/2021     11:59           190  test.ts
       1 file                       190 bytes
       2 directories    385,904,336,896 bytes free


```
</p>
</details>


