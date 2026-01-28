/*Imagine you are developing a real-time news application, and you need to fetch posts from three different sources to provide users with the latest updates.
The API endpoints for getting posts are:
https://dummyjson.com/posts
https://this-may-not-exist.com/posts
https://jsonplaceholder.typicode.com/posts
To ensure a seamless user experience, you are supposed to create a function called getFastPosts that fetches posts from these endpoints simultaneously (concurrently) and only presents data from the source that responds the quickest, while ignoring slower or potentially unreliable sources. Example of how the function should be used
 */

async function getFastPost(){
    let urls = ['https://dummyjson.com/posts', 'https://this-may-not-exist.com/posts','https://jsonplaceholder.typicode.com/posts'];
    try{
         let response = await Promise.any(urls.map(url => fetch(url)))
    let data = await response.json();
    console.log(data)
    }
    catch(error){
        throw new Error("Error!")
    }
    
}

getFastPost()



































// function getFastPosts(){
//     return Promise.race([
//         fetch ('https://dummyjson.com/posts'),
//         fetch ('https://this-may-not-exist.com/posts'),
//         fetch ('https://jsonplaceholder.typicode.com/posts')
//     ]).then(res => res.json())
//     .then(data => console.log(data));
// }

// getFastPosts();

// //ai response 

// function getFastPost(){
//     urls = [
//         "https://dummyjson.com/posts",
//         "https://this-may-not-exist.com/posts",
//         "https://jsonplaceholder.typicode.com/posts"
//     ]

//     const request = urls.map(url => {
//         fetch(url).then(res => res.json());
//     })

//     return Promise.race(request);
// }

// getFastPost();
