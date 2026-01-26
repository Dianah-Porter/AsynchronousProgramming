/*Implement a timeout for an asynchronous fetch request. If the request takes longer than(5 milliseconds) , it should be aborted.
https://jsonplaceholder.typicode.com/users
*/


async function timeoutFetch(){
    let controller = new AbortController();
    let signal = controller.signal; //connects  to fetch  
    const timeoutId =  setTimeout(()=> controller.abort() ,5);    //controller.abort() --> cancels the request 

    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users', {signal})   //signal links fetch to controller
        clearTimeout(timeoutId);
        let data = await response.json();
    }
    catch(error){
        if(error.name === 'AbortError') console.log("Request aborted!");

    } 

}
timeoutFetch()




