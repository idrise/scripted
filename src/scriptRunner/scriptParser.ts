export interface Script {
  cmd: string;
  interactive?: boolean;
  key?: string;
  os?: ("windows" | "linux" | "mac")[];
}

export function scriptParser(script: string, validParams?: string[]): Script[] {
  const lines = extractLinesFromScript(script);

  const accumulator: { scripts: Script[]; settings: Record<string, string> } = {
    scripts: [],
    settings: {},
  };
  const scripts = lines.reduce((acc, line, index) => {
    const lineNumber = index + 1;
    const isComment = line.startsWith("#");

    if (isComment) {
      const lineWithoutCommentSymbol = line.slice(1);
      return {
        ...acc,
        settings: {
          ...acc.settings,
          ...parseKeyValuesFromString(
            lineWithoutCommentSymbol,
            lineNumber,
            validParams,
          ),
        },
      };
    }

    return {
      scripts: [...acc.scripts, {
        cmd: line,
        ...acc.settings,
      }],
      settings: {},
    };
  }, accumulator);
  return scripts.scripts;
}

function extractLinesFromScript(script: string) {
  const lines = script.split("\n");

  return lines
    .map((a) => a.trim())
    .filter((a) => a.length > 0);
}

function parseKeyValuesFromString(
  keyValueString: string,
  lineNumber: number,
  validParams?: string[],
): Record<string, string> {
  const tokens = keyValueString.split(" ").filter((a) => a.length !== 0);

  const keyValues = tokens.reduce((acc, token) => {
    const [key, value] = parseKeyValueFromString(token, lineNumber);
    if (validParams && !validParams.includes(key)) {
      throw new Error(
        "Parameter ${key} is not a valid comment parameter try one of ${JSON.stringify(validParams)}",
      );
    }
    return { ...acc, [key]: value };
  }, {});
  return keyValues;
}

export function parseKeyValueFromString(
  token: string,
  lineNumber: number,
): [string, string | string[]] {
  const splitToken = token.split(":");
  const [key, value] = splitToken;
  const numberOfSectionsInToken = splitToken.length;
  const isTokenInvalid = !([1, 2].includes(numberOfSectionsInToken));
  const valueWithDefault = value || "true";
  const valueArray = valueWithDefault.split(",");
  const isValueAnArray = valueArray.length > 1;

  if (isTokenInvalid) {
    throw new Error(`Invalid token on line ${lineNumber}, too many colons`);
  }
  return [key, isValueAnArray ? valueArray : valueArray[0]];
}
