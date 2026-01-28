/*Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms*/


async function fetchOut(url, ms){
    let controller = new AbortController();
    let signal = controller.signal;
    let timeoutId = setTimeout(()=> controller.abort() ,ms)
    try{
        let response = await fetch(url, {signal});
        clearTimeout(timeoutId);
        let data = await response.json()
    }catch(err){
        console.log('The request was aborted ')
    } 

}

fetchOut().then(result => console.log(`Fetched Data = ${result}`))