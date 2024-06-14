export const javascriptCodeSnippets = [
  "const THRESHOLD = 5;\n" +
    'console.log("start");\n' +
    "function tetheredGetNumber(resolve: any, reject: any) {\n" +
    "  setTimeout(() => {\n" +
    "    const randomInt = Date.now();\n" +
    "    const value = randomInt % 10;\n" +
    "    resolve(value);\n" +
    "    reject(`Too large: ${value}`);\n" +
    '    console.log("hit");\n' +
    '    console.log("hit2");\n' +
    "  }, 500);\n" +
    "}\n" +
    "\n" +
    "new Promise(tetheredGetNumber).then((r) => console.log(r)).catch(console.error);\n" +
    "\n" +
    'console.log("finish");\n' +
    "\n" +
    "// start\n" +
    "// finish\n" +
    "// hit\n" +
    "// hit2\n" +
    "// 3",
  "const THRESHOLD = 5;\n" +
    'console.log("start");\n' +
    "function tetheredGetNumber(resolve: any, reject: any) {\n" +
    "  setTimeout(() => {\n" +
    "    const randomInt = Date.now();\n" +
    "    const value = randomInt % 10;\n" +
    "    reject(`Too large: ${value}`);\n" +
    '    console.log("hit");\n' +
    "    resolve(value);\n" +
    '    console.log("hit2");\n' +
    "  }, 500);\n" +
    "}\n" +
    "\n" +
    "new Promise(tetheredGetNumber).then((r) => console.log(r)).catch(console.error);\n" +
    "\n" +
    'console.log("finish");\n' +
    "\n" +
    "// start\n" +
    "// finish\n" +
    "// hit\n" +
    "// hit2\n" +
    "// Too large: 9",
  "const THRESHOLD = 5;\n" +
    'console.log("start");\n' +
    "function tetheredGetNumber(\n" +
    "  resolve: (value: unknown) => void,\n" +
    "  reject: (reason?: any) => void,\n" +
    ") {\n" +
    '  console.log("tetheredGetNumber");\n' +
    "  setTimeout(() => {\n" +
    "    const randomInt = Date.now();\n" +
    "    const value = randomInt % 10;\n" +
    "\n" +
    "    if (value < THRESHOLD) {\n" +
    "      resolve(value);\n" +
    "    } else {\n" +
    "      reject(`Too large: ${value}`);\n" +
    "    }\n" +
    "  }, 500);\n" +
    "}\n" +
    "\n" +
    "function determineParity(value: unknown) {\n" +
    '  if (typeof value !== "number") {\n' +
    "    return null;\n" +
    "  }\n" +
    "  const isOdd = value % 2 === 1;\n" +
    "  return { value, isOdd };\n" +
    "}\n" +
    "\n" +
    "function troubleWithGetNumber(reason: (reason: any) => PromiseLike<never>) {\n" +
    '  const err = new Error("Reason: " + reason);\n' +
    "\n" +
    "  console.error(err);\n" +
    "  throw err;\n" +
    "}\n" +
    "\n" +
    "new Promise(tetheredGetNumber)\n" +
    "  .then(determineParity, troubleWithGetNumber)\n" +
    "  .then((res) => console.log(res));\n" +
    "\n" +
    'console.log("finish");\n' +
    "\n" +
    "// start\n" +
    "// tetheredGetNumber\n" +
    "// finish\n" +
    "// { value: 4, isOdd: false }",
];
