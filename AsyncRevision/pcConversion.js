/*Write a JavaScript program that converts this callback-based function to a promise-based function.*/

function callbackPromiseConversion(){
return new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Data received");
    }, 1000)
});
}

//Callback version
function getData(callback) {
  setTimeout(() => {
    callback(null, "Data received");
  }, 1000);
}
//Promise version
function getDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}
