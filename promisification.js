//Original function (uses callback)
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script); 
  script.onerror = () => callback(new Error("Error loading script"));

  document.head.append(script);
}


//Promisified version
function loadScriptPromise(src){
    return new Promise((resolve, reject)=>{
        loadScript(src, (err, script)=>{
            if(err) reject(err);
            else resolve(script);
        });
    });
}
loadScriptPromise("file.js")
  .then(script => console.log("Loaded!"))
  .catch(err => console.error(err));

//General helper function for promisification 
function promisfy(f){
    return function (...args){
        return new Promise((resolve, reject)=>{
            function callback(err, result){
                if(err) reject(err);
                else resolve(result);
            }
            args.push(callback);
            f.call(this, ...args);
        });
    };
}

let loadScriptPromise = promisify(loadScript)