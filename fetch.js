//syntax:
// let promise = fetch(url);
// let promis = fetch("http://api.examples.com/data").then(response => response.json());

// let fetchPromise = fetch("https://no-such-server.blabla");
// fetchPromise.then(result => result.json())
// .catch(error => console.log("No website found", error));

let p = new Promise((resolve, reject )=> {
    throw new Error('Whoops!');
}).catch(error => console.log(error));
//same as 
let pp = new Promise((resolve, reject)=>{
    reject(new Error('Whoops!'))
})

