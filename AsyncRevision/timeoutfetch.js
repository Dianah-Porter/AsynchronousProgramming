/*Implement a timeout for an asynchronous fetch request. If the request takes longer than(5 milliseconds) , it should be aborted.
https://jsonplaceholder.typicode.com/users
*/

function fetchWithTimeout() {
    let controller = new AbortController();
    let timeout = setTimeout(() => controller.abort() ,5);
    fetch ('https://jsonplaceholder.typicode.com/users', {signal: controller.signal}) 
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
        if(err.name === "AbortError"){
            console.log("The Request was aborted due to timeout");
        } 
    })
    .finally(()=> clearInterval(timeout));
}


function fetchwithout(){
    let controller = new AbortController();
    let timeout= setTimeout(()=> controller.abort() ,5);
    fetch('https://www.example.com/users', {signal: controller.signal})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
        if(err.name == "AbortError"){
            console.log("The request was aborted")
        }
    }).finally(()=> clearInterval(timeout));
}


