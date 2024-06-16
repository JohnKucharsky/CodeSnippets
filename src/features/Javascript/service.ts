export const javascriptCodeSnippets = [
  //   one
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
  //   two
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
  //   three
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
  //   four
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
  //   five
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
  //   six
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
  //   seven
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
  //   eight
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
  //   9
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
  //   10
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
  //     11
  "(() => {\n" +
    "  try {\n" +
    "    try {\n" +
    '      throw new Error("oops");\n' +
    "    } catch (e) {\n" +
    "      if (e instanceof Error) {\n" +
    '        console.error("inner", e.message);\n' +
    "      }\n" +
    "      throw e;\n" +
    "    } finally {\n" +
    '      console.log("finally");\n' +
    "      return;\n" +
    "    }\n" +
    "  } catch (e) {\n" +
    "    if (e instanceof Error) {\n" +
    '      console.error("outer", e.message);\n' +
    "    }\n" +
    "  }\n" +
    "})();\n" +
    "\n" +
    "// inner oops\n" +
    "// finally ",
  //   12
  "function job() {\n" +
    "  return new Promise(function (resolve, reject) {\n" +
    "    reject();\n" +
    "  });\n" +
    "}\n" +
    "\n" +
    "let promise = job();\n" +
    "\n" +
    "promise\n" +
    "\n" +
    "  .then(function () {\n" +
    '    console.log("Success 1");\n' +
    "  })\n" +
    "\n" +
    "  .then(function () {\n" +
    '    console.log("Success 2");\n' +
    "  })\n" +
    "\n" +
    "  .then(function () {\n" +
    '    console.log("Success 3");\n' +
    "  })\n" +
    "\n" +
    "  .catch(function () {\n" +
    '    console.log("Error 1");\n' +
    "  })\n" +
    "\n" +
    "  .then(function () {\n" +
    '    console.log("Success 4");\n' +
    "  });\n" +
    "\n" +
    "// Error 1\n" +
    "// Success 4",
  //   13
  "function job(state: boolean) {\n" +
    "  return new Promise(function (resolve, reject) {\n" +
    "    if (state) {\n" +
    '      resolve("success");\n' +
    "    } else {\n" +
    '      reject("error");\n' +
    "    }\n" +
    "  });\n" +
    "}\n" +
    "\n" +
    "let promise = job(true);\n" +
    "\n" +
    "promise\n" +
    "\n" +
    "  .then(function (data) {\n" +
    "    console.log(data);\n" +
    "\n" +
    "    return job(false);\n" +
    "  })\n" +
    "\n" +
    "  .catch(function (error) {\n" +
    "    console.log(error);\n" +
    "\n" +
    '    return "Error caught";\n' +
    "  })\n" +
    "\n" +
    "  .then(function (data) {\n" +
    "    console.log(data);\n" +
    "\n" +
    "    return job(true);\n" +
    "  })\n" +
    "\n" +
    "  .catch(function (error) {\n" +
    "    console.log(error);\n" +
    "  });\n" +
    "\n" +
    "// success\n" +
    "// error\n" +
    "// Error caught",
  //     14
  "function job(state: boolean) {\n" +
    "  return new Promise(function (resolve, reject) {\n" +
    "    if (state) {\n" +
    '      resolve("success");\n' +
    "    } else {\n" +
    '      reject("error");\n' +
    "    }\n" +
    "  });\n" +
    "}\n" +
    "\n" +
    "let promise = job(true);\n" +
    "\n" +
    "promise\n" +
    "\n" +
    "  .then(function (data) {\n" +
    "    console.log(data);\n" +
    "\n" +
    "    return job(true);\n" +
    "  })\n" +
    "\n" +
    "  .then(function (data) {\n" +
    '    if (data !== "victory") {\n' +
    '      throw "Defeat";\n' +
    "    }\n" +
    "\n" +
    "    return job(true);\n" +
    "  })\n" +
    "\n" +
    "  .then(function (data) {\n" +
    "    console.log(data);\n" +
    "  })\n" +
    "\n" +
    "  .catch(function (error) {\n" +
    "    console.log(error);\n" +
    "\n" +
    "    return job(false);\n" +
    "  })\n" +
    "\n" +
    "  .then(function (data) {\n" +
    "    console.log(data);\n" +
    "\n" +
    "    return job(true);\n" +
    "  })\n" +
    "\n" +
    "  .catch(function (error) {\n" +
    "    console.log(error);\n" +
    "\n" +
    '    return "Error caught";\n' +
    "  })\n" +
    "\n" +
    "  .then(function (data) {\n" +
    "    console.log(data);\n" +
    "\n" +
    '    return new Error("test");\n' +
    "  })\n" +
    "\n" +
    "  .then(function (data) {\n" +
    '    console.log("Success:", data.message);\n' +
    "  })\n" +
    "\n" +
    "  .catch(function (data) {\n" +
    '    console.log("Error:", data.message);\n' +
    "  });\n" +
    "\n" +
    "// success\n" +
    "// Defeat\n" +
    "// error\n" +
    "// Error caught\n" +
    "// Success: test",
  //     15
  "function job(delay: number) {\n" +
    "  return new Promise(function (resolve) {\n" +
    "    setTimeout(function () {\n" +
    '      console.log("Resolving", delay);\n' +
    '      resolve("done " + delay);\n' +
    "    }, delay);\n" +
    "  });\n" +
    "}\n" +
    "\n" +
    "let promise = Promise.all([job(1000), job(500), job(1500)]);\n" +
    "\n" +
    "promise.then(function (data) {\n" +
    '  console.log("All done");\n' +
    "  console.log(data);\n" +
    "  data.forEach(function (text) {\n" +
    "    console.log(text);\n" +
    "  });\n" +
    "});\n" +
    "\n" +
    "// Resolving 500\n" +
    "// Resolving 1000\n" +
    "// Resolving 1500\n" +
    "// All done\n" +
    "//   [ 'done 1000', 'done 500', 'done 1500' ]\n" +
    "// done 1000\n" +
    "// done 500\n" +
    "// done 1500",
  //     16
  "\n" +
    "function job(delay: number) {\n" +
    "  return new Promise(function (resolve, reject) {\n" +
    "    setTimeout(function () {\n" +
    '      console.log("Resolving", delay);\n' +
    "\n" +
    "      if (delay === 500) {\n" +
    '        reject("Error");\n' +
    "      }\n" +
    "\n" +
    '      resolve("done " + delay);\n' +
    "    }, delay);\n" +
    "  });\n" +
    "}\n" +
    "\n" +
    "let promise = Promise.all([job(1000), job(500), job(1500)]);\n" +
    "\n" +
    "promise\n" +
    "  .then(function (data) {\n" +
    '    console.log("All done");\n' +
    "    console.log(data);\n" +
    "    data.forEach(function (text) {\n" +
    "      console.log(text);\n" +
    "    });\n" +
    "  })\n" +
    "  .catch(function (err) {\n" +
    "    console.error(err);\n" +
    "  });\n" +
    "\n" +
    "// Resolving 500\n" +
    "// Error\n" +
    "// Resolving 1000\n" +
    "// Resolving 1500",
  //   17
  "function delay(time: number) {\n" +
    "  return new Promise(function (resolve) {\n" +
    '    setTimeout(resolve, time, "success " + time);\n' +
    "  });\n" +
    "}\n" +
    "\n" +
    "function delayReject(time: number) {\n" +
    "  return new Promise(function (reject) {\n" +
    '    setTimeout(reject, time, "error " + time);\n' +
    "  });\n" +
    "}\n" +
    "\n" +
    "Promise.race([delay(500), delay(100)]).then(\n" +
    "  function (data) {\n" +
    "    console.log(data);\n" +
    "  },\n" +
    ");\n" +
    "\n" +
    "Promise.race([delayReject(500), delayReject(100)]).then(\n" +
    "  function (data) {\n" +
    "    console.log(data);\n" +
    "  },\n" +
    ");\n" +
    "\n" +
    "Promise.race([delay(500), delayReject(100)]).then(\n" +
    "  function (data) {\n" +
    "    console.log(data);\n" +
    "  },\n" +
    ");\n" +
    "\n" +
    "Promise.race([delay(100), delayReject(500)]).then(\n" +
    "  function (data) {\n" +
    "    console.log(data);\n" +
    "  },\n" +
    ");\n" +
    "\n" +
    "Promise.race([delayReject(100), delay(500)]).then(\n" +
    "  function (data) {\n" +
    "    console.log(data);\n" +
    "  },\n" +
    ");\n" +
    "\n" +
    "// success 100\n" +
    "// error 100\n" +
    "// error 100\n" +
    "// success 100\n" +
    "// error 100",
  //   18
  "const p1 = Promise.resolve(3);\n" +
    "const p2 = 1337;\n" +
    "const p3 = new Promise((resolve, reject) => {\n" +
    "  setTimeout(() => {\n" +
    '    resolve("foo");\n' +
    "  }, 100);\n" +
    "});\n" +
    "\n" +
    "Promise.all([p1, p2, p3]).then((values) => {\n" +
    "  console.log(values);\n" +
    "});\n" +
    "\n" +
    '// [3, 1337, "foo"]',
  //     19
  "const mixedPromisesArray = [\n" +
    "  Promise.resolve(33),\n" +
    "  Promise.reject(44),\n" +
    "];\n" +
    "const p = Promise.all(mixedPromisesArray);\n" +
    "console.log(p);\n" +
    'console.log("hit");\n' +
    "setTimeout(() => {\n" +
    '  console.log("the queue is now empty");\n' +
    "  p.then().catch((e) => console.error(e.message));\n" +
    "});\n" +
    "\n" +
    'console.log("hit bottom");\n' +
    "\n" +
    "// Promise { <pending> }\n" +
    "// hit\n" +
    "// hit bottom\n" +
    "// UnhandledPromiseRejection: This error originated either\n" +
    "// by throwing inside of an async function without a catch\n" +
    "// block, or by rejecting a promise which was not handled \n" +
    '// with .catch(). The promise rejected with the reason "44".',
  //     20
  "const p = Promise.all([]); // Will be immediately resolved\n" +
    'const p2 = Promise.all([1337, "hi"]); // Non-promise values are ignored,\n' +
    "// but the evaluation is done asynchronously\n" +
    "console.log(p);\n" +
    "console.log(p2);\n" +
    "setTimeout(() => {\n" +
    '  console.log("the queue is now empty");\n' +
    "  console.log(p2);\n" +
    "});\n" +
    "\n" +
    "// Promise { [] }\n" +
    "// Promise { <pending> }\n" +
    "// the queue is now empty\n" +
    "// Promise { [ 1337, 'hi' ] }",
  //     21
  "Promise.allSettled([\n" +
    "  Promise.resolve(33),\n" +
    "  new Promise((resolve) =>\n" +
    "    setTimeout(() => resolve(66), 0),\n" +
    "  ),\n" +
    "  99,\n" +
    '  Promise.reject("an error"),\n' +
    "])\n" +
    "  .then((values) => console.log(values))\n" +
    "  .catch(console.error);\n" +
    "\n" +
    "// [\n" +
    "//   { status: 'fulfilled', value: 33 },\n" +
    "//   { status: 'fulfilled', value: 66 },\n" +
    "//   { status: 'fulfilled', value: 99 },\n" +
    "//   { status: 'rejected', reason: 'an error' }\n" +
    "// ]",
  //     22
  "Promise.all([\n" +
    "  Promise.resolve(33),\n" +
    "  new Promise((resolve) =>\n" +
    "    setTimeout(() => resolve(66), 0),\n" +
    "  ),\n" +
    "  99,\n" +
    '  Promise.reject("an error"),\n' +
    "])\n" +
    "  .then((values) => console.log(values))\n" +
    "  .catch(console.error);\n" +
    "\n" +
    "// an error",
  //   23
  "const mixedPromisesArray = [\n" +
    "  Promise.resolve(33),\n" +
    "  Promise.reject(44),\n" +
    "];\n" +
    "const p = Promise.all(mixedPromisesArray);\n" +
    "console.log(p.catch(console.error));\n" +
    'console.log("hit");\n' +
    "setTimeout(() => {\n" +
    '  console.log("the queue is now empty");\n' +
    "  console.log(p);\n" +
    "});\n" +
    "\n" +
    'console.log("hit bottom");\n' +
    "\n" +
    "// Promise { <pending> }\n" +
    "// hit\n" +
    "// hit bottom\n" +
    "// 44\n" +
    "// the queue is now empty\n" +
    "// Promise { <rejected> 44 }",
];
