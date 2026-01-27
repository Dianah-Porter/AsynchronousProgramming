/*3.	Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails. You should log to the console “Retrying….” when retrying the request. */

async function retry(url, retries){
    try{
        let response = await fetch(url);
        if(!response.ok){
            throw new Error("Request failed!");
        }
        let data = await response.json();
        return data;
    }
    catch(error){
        if(retries > 0){
            console.log("Retrying ....");
            return retry(url, retries - 1)
        }else{
            throw error;
        }
    }
}



