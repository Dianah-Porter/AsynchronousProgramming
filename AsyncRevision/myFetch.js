/* Create a function called myFetch that should work as a simple version of the native fetch() API. The function myFetch should use the XMLHttpRequest to make a GET Request and return a promise that resolves with the request’s response and rejects with an error if any.*/

function myFetch(url){
    return new promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

         // Step 1: Prepare the request
        xhr.open('GET', url);  

         // Step 2: Handle success
        xhr.onload = () => {           //This event runs when the server responds
                if(xhr.status === 200 && xhr.status < 300){
                    resolve(xhr.responseText)
                }else{
                    reject(new Error("Request Failed" + xhr.status))
                }
        };
        // Step 3: Handle network error
        xhr.onerror= () => {
            reject(new Error('Network Error'));
        };

        // Step 4: Send the request
        xhr.send();
    });
    
}