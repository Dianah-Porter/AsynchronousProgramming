let promise = Promise.resolve();
promise.then(() => console.log("promise done!"));
console.log("code finished");