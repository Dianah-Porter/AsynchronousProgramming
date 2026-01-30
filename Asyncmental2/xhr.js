/*4.	Write a JavaScript function fetchToDo that uses XMLHttpRequest to fetch data from the given URL (https://jsonplaceholder.typicode.com/todos/1). The function should handle both successful responses and errors (such as network issues or invalid URLs). Upon receiving a successful response, it should log the fetched data to the console. If there's an error, it should catch the error and log an appropriate message.*/


function fetchToDo(){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

        xhr.onload = () => {
            if(xhr.status >= 200 && xhr.status < 300 ){
                let data = JSON.parse(xhr.responseText)
                resolve(data);
            }else{
                reject(`Error with status code ${xhr.status}`)
            }
        }
        xhr.onerror = () => { 
            reject('Network Error occured ')
        }
        xhr.send();
    })
}

fetchToDo()
.then(result => console.log(`Fetched Data = ${result}`))
.catch(error => console.log("Network Errors occured " + error))


/*5.	Extend the fetchToDo function from Question 4 to include custom headers in the request. Specifically, you need to add a User-Agent header with a custom value and a Content-Type header set to application/json. Additionally, modify the function to send a JSON payload in the request body. After sending the request, the function should parse the JSON response and log the parsed object to the console.*/


function fetchToDo(){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://jsonplaceholder.typicode.com/todos/1'); //open or initializing a post request 
        
        //custom headers 
        xhr.setRequestHeader('User-Agent', 'MyCustomApp/1.0');
        xhr.setRequestHeader('Content-Type' , 'application.json')


            //Handling a successful response when server responds
        xhr.onload = () =>{
            if(xhr.status >= 200 && xhr.status < 300 ){
                let data = JSON.parse(xhr.responseText)
                console.log(`Fetched Data = ${data}`);
            }else{
                reject(`Error with status code ${xhr.status}`)
            }
        }
        xhr.onerror = () => { 
            reject('Network Error occured ')
        }

        //Create JSON payload (request body)
        let todoData = {
            title: 'Learn HttpRequest',
            completed: false,
            userId: 1
        };

        xhr.send(JSON.stringify(todoData));
    })
}


fetchToDo()
.then(result => console.log(`Fetched Data = ${result}`))
.catch(error => console.log(`Network Errors occured ${error}`))

