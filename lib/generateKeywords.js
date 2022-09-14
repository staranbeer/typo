// a list of javascript keywords

let keywords = [
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
];

// generate a random array of keywords from the above array
let randomKeywords = [];

for (let i = 0; i < 100; i++) {
  let randomIndex = Math.floor(Math.random() * keywords.length);
  randomKeywords.push(keywords[randomIndex]);
}

export default randomKeywords;
