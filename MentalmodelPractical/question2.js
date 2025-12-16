//Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms

let abortController = (url)=>{
    // Create an AbortController instance
    let controller = new AbortController();
    //obtain the reference to abort signal 
    let signal = controller.signal;

     fetch(url, {signal})
    .then(response => response.json())
    .then(data => console.log("Data:", data))
    .catch(err=> console.log('Error is detected!', err));

    setTimeout(()=> {
         controller.abort();
    },10);
    return 'Fetch started ...';
}

console.log(abortController('https://jsonplaceholder.typicode.com/todos/1'));
// console.log(abortController('https://httpbin.org/delay/3'));



async function abortControllerAsync(url) {
    const controller = new AbortController();
    const signal = controller.signal;

    // Abort after 10ms
    setTimeout(() => controller.abort(), 10);

    try {
        const response = await fetch(url, { signal });
        const data = await response.json();
        console.log("Data:", data);
    } 
    catch (err) {
        if (err.name === "AbortError") {
            console.log("Request aborted!");
        } else {
            console.log("Fetch error:", err);
        }
    }
}
