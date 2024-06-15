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
    "  return {\n" +
    "    value,\n" +
    "    isOdd,\n" +
    "  };\n" +
    "}\n" +
    "\n" +
    "function troubleWithGetNumber(\n" +
    "  reason: (reason: any) => PromiseLike<never>,\n" +
    ") {\n" +
    '  const err = new Error("Reason: " + reason);\n' +
    "\n" +
    "  console.error(err);\n" +
    "  throw err;\n" +
    "}\n" +
    "\n" +
    "function promiseGetWord(parityInfo: any) {\n" +
    "  return new Promise((resolve, reject) => {\n" +
    "    const { value, isOdd } = parityInfo;\n" +
    "    if (value >= THRESHOLD) {\n" +
    "      reject(`Still too large: $`);\n" +
    "    } else {\n" +
    '      parityInfo.wordEvenOdd = isOdd ? "odd" : "even";\n' +
    "      resolve(parityInfo);\n" +
    "    }\n" +
    "  });\n" +
    "}\n" +
    "\n" +
    "new Promise(tetheredGetNumber)\n" +
    "  .then(determineParity, troubleWithGetNumber)\n" +
    "  .then(promiseGetWord)\n" +
    "  .then((info) => {\n" +
    "    console.log(info);\n" +
    "  });\n" +
    "\n" +
    'console.log("finish");\n' +
    "\n" +
    "// start\n" +
    "// tetheredGetNumber\n" +
    "// finish\n" +
    "// { value: 2, isOdd: false, wordEvenOdd: 'even' }",
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
    "  return {\n" +
    "    value,\n" +
    "    isOdd,\n" +
    "  };\n" +
    "}\n" +
    "\n" +
    "function troubleWithGetNumber(\n" +
    "  reason: (reason: any) => PromiseLike<never>,\n" +
    ") {\n" +
    '  const err = new Error("Reason: " + reason);\n' +
    "\n" +
    "  console.error(err);\n" +
    "  throw err;\n" +
    "}\n" +
    "\n" +
    "function promiseGetWord(parityInfo: any) {\n" +
    "  return new Promise((resolve, reject) => {\n" +
    "    const { value, isOdd } = parityInfo;\n" +
    "    if (value >= THRESHOLD) {\n" +
    "      reject(`Still too large: $`);\n" +
    "    } else {\n" +
    '      parityInfo.wordEvenOdd = isOdd ? "odd" : "even";\n' +
    "      resolve(parityInfo);\n" +
    "    }\n" +
    "  });\n" +
    "}\n" +
    "\n" +
    "new Promise(tetheredGetNumber)\n" +
    "  .then(determineParity, troubleWithGetNumber)\n" +
    "  .then(promiseGetWord)\n" +
    "  .then((info) => {\n" +
    "    console.log(info);\n" +
    "  });\n" +
    "\n" +
    'console.log("finish");\n' +
    "\n" +
    "// start\n" +
    "// tetheredGetNumber\n" +
    "// finish\n" +
    "// Error: Reason: Too large: 8\n" +
    "// at troubleWithGetNumber (file:///C:/Projects/ts-playground/index.ts:34:15)\n" +
    "//\n" +
    "// file:///C:/Projects/ts-playground/index.ts:34\n" +
    '//   const err = new Error("Reason: " + reason);\n' +
    "// ^\n" +
    "// Error: Reason: Too large: 8\n" +
    "// at troubleWithGetNumber (file:///C:/Projects/ts-playground/index.ts:34:15)",
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
    "  return {\n" +
    "    value,\n" +
    "    isOdd,\n" +
    "  };\n" +
    "}\n" +
    "\n" +
    "function troubleWithGetNumber(\n" +
    "  reason: (reason: any) => PromiseLike<never>,\n" +
    ") {\n" +
    '  const err = new Error("Reason: " + reason);\n' +
    "\n" +
    "  console.error(err);\n" +
    "  throw err;\n" +
    "}\n" +
    "\n" +
    "function promiseGetWord(parityInfo: any) {\n" +
    "  return new Promise((resolve, reject) => {\n" +
    "    const { value, isOdd } = parityInfo;\n" +
    "    if (value >= THRESHOLD) {\n" +
    "      reject(`Still too large: $`);\n" +
    "    } else {\n" +
    '      parityInfo.wordEvenOdd = isOdd ? "odd" : "even";\n' +
    "      resolve(parityInfo);\n" +
    "    }\n" +
    "  });\n" +
    "}\n" +
    "\n" +
    "new Promise(tetheredGetNumber)\n" +
    "  .then(determineParity, troubleWithGetNumber)\n" +
    "  .then(promiseGetWord)\n" +
    "  .then((info) => {\n" +
    "    console.log(info);\n" +
    "  })\n" +
    "  .then((res) => console.log({ res }));\n" +
    "\n" +
    'console.log("finish");\n' +
    "\n" +
    "// start\n" +
    "// tetheredGetNumber\n" +
    "// finish\n" +
    "// { value: 4, isOdd: false, wordEvenOdd: 'even' }\n" +
    "// { res: undefined }",
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
    "  return {\n" +
    "    value,\n" +
    "    isOdd,\n" +
    "  };\n" +
    "}\n" +
    "\n" +
    "function troubleWithGetNumber(\n" +
    "  reason: (reason: any) => PromiseLike<never>,\n" +
    ") {\n" +
    '  const err = new Error("Reason: " + reason);\n' +
    "\n" +
    "  console.error(err);\n" +
    "  throw err;\n" +
    "}\n" +
    "\n" +
    "function promiseGetWord(parityInfo: any) {\n" +
    "  return new Promise((resolve, reject) => {\n" +
    "    const { value, isOdd } = parityInfo;\n" +
    "    if (value >= THRESHOLD) {\n" +
    "      reject(`Still too large: $`);\n" +
    "    } else {\n" +
    '      parityInfo.wordEvenOdd = isOdd ? "odd" : "even";\n' +
    "      resolve(parityInfo);\n" +
    "    }\n" +
    "  });\n" +
    "}\n" +
    "\n" +
    "new Promise(tetheredGetNumber)\n" +
    "  .then(determineParity, troubleWithGetNumber)\n" +
    "  .then(promiseGetWord)\n" +
    "  .then((info) => {\n" +
    "    console.log(info);\n" +
    "    return info;\n" +
    "  })\n" +
    "  .then((res) => console.log({ res }));\n" +
    "\n" +
    'console.log("finish");\n' +
    "\n" +
    "// start\n" +
    "// tetheredGetNumber\n" +
    "// finish\n" +
    "// { value: 2, isOdd: false, wordEvenOdd: 'even' }\n" +
    "// { res: { value: 2, isOdd: false, wordEvenOdd: 'even' } }",
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
    "  return {\n" +
    "    value,\n" +
    "    isOdd,\n" +
    "  };\n" +
    "}\n" +
    "\n" +
    "function troubleWithGetNumber(\n" +
    "  reason: (reason: any) => PromiseLike<never>,\n" +
    ") {\n" +
    '  const err = new Error("Reason: " + reason);\n' +
    "\n" +
    "  console.error(err);\n" +
    "  throw err;\n" +
    "}\n" +
    "\n" +
    "function promiseGetWord(parityInfo: any) {\n" +
    "  return new Promise((resolve, reject) => {\n" +
    "    const { value, isOdd } = parityInfo;\n" +
    "    if (value >= THRESHOLD) {\n" +
    "      reject(`Still too large: $`);\n" +
    "    } else {\n" +
    '      parityInfo.wordEvenOdd = isOdd ? "odd" : "even";\n' +
    "      resolve(parityInfo);\n" +
    "    }\n" +
    "  });\n" +
    "}\n" +
    "\n" +
    "new Promise(tetheredGetNumber)\n" +
    "  .then(determineParity, troubleWithGetNumber)\n" +
    "  .then(promiseGetWord)\n" +
    "  .then((info) => {\n" +
    "    console.log(info);\n" +
    "    return info;\n" +
    "  })\n" +
    "  .catch((reason) => {\n" +
    "    if (reason.cause) {\n" +
    '      console.error("Had previously handled error");\n' +
    "    } else {\n" +
    "      console.error(`Trouble with ${reason}`);\n" +
    "    }\n" +
    "  })\n" +
    '  .finally(() => console.log("All done"));\n' +
    "\n" +
    'console.log("finish");\n' +
    "\n" +
    "// start\n" +
    "// tetheredGetNumber\n" +
    "// finish\n" +
    "// { value: 1, isOdd: true, wordEvenOdd: 'odd' }\n" +
    "// All done  ",
  "try {\n" +
    '  throw new TypeError("oops");\n' +
    "} catch (e) {\n" +
    "  if (e instanceof Error) {\n" +
    "    const { name, message } = e;\n" +
    "    console.log({ name, message });\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "// { name: 'TypeError', message: 'oops' }",
  "try {\n" +
    "  try {\n" +
    '    throw new Error("oops");\n' +
    "  } catch (e) {\n" +
    "    if (e instanceof Error) {\n" +
    '      console.error("inner:", e.message);\n' +
    "    }\n" +
    "    throw e;\n" +
    "  } finally {\n" +
    '    console.log("finally");\n' +
    "  }\n" +
    "} catch (e) {\n" +
    "  if (e instanceof Error) {\n" +
    '    console.error("outer", e.message);\n' +
    "  } else {\n" +
    "    throw e;\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "// inner: oops\n" +
    "// finally\n" +
    "// outer oops",
];
