/* Create a function called myFetch that should work as a simple version of the native fetch() API. The function myFetch should use the XMLHttpRequest to make a GET Request and return a promise that resolves with the request’s response and rejects with an error if any.*/

function myFetch(url){
    return new Promise((resolve, reject)=> {
        let xml = new XMLHttpRequest();
        xml.open("GET", url);

        xml.onload = () => {
            if(xml.status >= 200 && xml.status <= 300){
                resolve(xml.responseText)
            }else{
                reject("Request failed")
            }
        };
        xml.onerror = () => reject("Network error");
        xml.send(); 
    });   
}

