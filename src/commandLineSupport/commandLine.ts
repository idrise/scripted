export function parseDescribe(str: string) {
  const tokens = str.split("\n").join(" ").split("\t").join(" ").split(" ")
    .filter((a) => a.length > 0);
  return tokens;
}

interface IdentifiedToken {
  type: "switch" | "command" | "fixedparam"
  key?:string
  param?: string
}

export function identifyToken(
  str: string,
  index: number,
): IdentifiedToken {
  const isFirstToken = index === 0;
  const tokenBeginsWithLetter = /^[a-zA-Z0-9]/.test(str);
  const isFirstLetterDoubleDash = str.startsWith("--");
  const isFirstLetterRequiredParameter = str.startsWith("[") && str.endsWith("]");
  const isFirstLetterRequiredParameters = str.startsWith("[...") && str.endsWith(']');
  const isCommand = tokenBeginsWithLetter && isFirstToken;

  if (isCommand) {
    return {type: "command"};
  }
  if (isFirstLetterRequiredParameter || isFirstLetterRequiredParameters) {
    return {type: "fixedparam"};
  }
  if (isFirstLetterDoubleDash) {
    const [key,param] = str.split('=')
    return {type: "switch",key:key.slice(2), param: param};
  }
  throw new Error(`Unrecognised token ${str}`);
}
