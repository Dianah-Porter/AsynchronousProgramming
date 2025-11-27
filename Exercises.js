//Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
function delayed(callback){
    setTimeout(callback,2000);
}
function greeting(){
    console.log('This is the invoked function called after 2 seconds');
}
delayed(greeting);

//Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.

function apiFetch(urls){
    return urls.map(url => fetch(url))
}

const result = apiFetch([
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
])
promise.all(result)
.then(response=>console.log(response))
