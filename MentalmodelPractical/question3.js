// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails. You should log to the console “Retrying….” when retrying the request.

let retryFetch = (url)=>{
    fetch(url)
}