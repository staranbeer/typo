// different types of javascript keywords

let keywords = {
  "Vanilla Js": [
    "let",
    "break",
    "case",
    "catch",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "finally",
    "for",
    "function",
    "if",
    "in",
    "instanceof",
    "new",
    "return",
    "switch",
    "this",
    "throw",
    "try",
    "typeof",
    "let",
    "while",
    "class",
    "const",
    "enum",
    "export",
    "extends",
    "import",
    "super",
    "static",
    "yield",
    "null",
    "true",
    "false",
    "undefined",
    "boolean",
  ],
  DOM: ["DOM"],
  Node: ["Node"],
};

const generateKeywords = (mode = "Vanilla Js") => {
  // generate a random array of keywords from the array of mode type
  let randomKeywords = [];

  for (let i = 0; i < 100; i++) {
    let randomIndex = Math.floor(Math.random() * keywords[mode].length);
    randomKeywords.push(keywords[mode][randomIndex]);
  }
  return randomKeywords;
};

export default generateKeywords;
