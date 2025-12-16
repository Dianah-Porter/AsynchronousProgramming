function httpGet(url){
    return fetch(url)
            .then(response => {
                if(!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                return response.json();
            })
}
httpGet("https://jsonplaceholder.typicode.com/posts/1")
.then(data => console.log(data))
.then(err => console.log(err));
