let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

let promise = urls.map(url => fetch(url));
Promise.all(promise)
.then(responses =>
     responses.forEach(response => 
        console.log(`${response.url} : ${response.status}`)
     ));

Promise.all([
    new Promise((resolve,reject)=> setTimeout(()=> resolve(1), 4000)),
    new Promise((resolve, reject)=> setTimeout(()=> reject(new Error("Whoops!") ),2000)),
    new Promise((resolve, reject)=> setTimeout(()=> reject(new Error ("Ooops no!")), 1000))
    ]).then(result => console.log(result));

Promise.allSettled([
    new Promise((resolve,reject)=> setTimeout(()=> resolve(1), 4000)),
    new Promise((resolve, reject)=> setTimeout(()=> resolve(new Error("Whoops!") ),2000)),
    new Promise((resolve, reject)=> setTimeout(()=> resolve(3), 1000))
    ]).then(result => console.log(result));


