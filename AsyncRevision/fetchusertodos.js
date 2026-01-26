/* Create a function called fetchUserTodos that uses the Promise.all() method to fetch users and todos concurrently from the provided API endpoints and combine them based on the userId. The function should return a promise that resolves with the combined data.
Users endpoints https://jsonplaceholder.typicode.com/users
Todos endpoints https://jsonplaceholder.typicode.com/todos
The returned promise should resolve into an array of users, where each user object has a new key todos. This key should contain an array of todos that belong to the user, determined by matching the userId of the todo with the id of the user. */

async function fetchUserTodos(){
    let urls = ['https://jsonplaceholder.typicode.com/users', 'https://jsonplaceholder.typicode.com/todos']
    let requests =  await Promise.all(urls.map(url => fetch(url)));
    let responses = await Promise.all(requests.map(req => req.json()));
    console.log(responses );

    let users = responses[0];
    let todos =responses[1];
    let result = {}
    for(let user of users){
        result.name = user.name;
        result.id = user.id;
        result.todos = todos.filter(todo => todo.id === user.id)
    }
    console.log(result)
}
fetchUserTodos()
