async function apple(){
    return 1;
}

console.log(apple()); //Promise { 1 }
apple().then(a => console.log(`I have ${a} apple(s).`))//1


async function orange(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=> resolve("orange fruit"),2000);
    })
    let result = await promise;
    return result;
}
orange().then(b=> console.log(`I have ${b}`)); //I have orange fruit


async function showAvatar(){
    let response = await fetch('/article/promise-chaining/user.json');
    let responseJson = await response.json();

    let githubUser = await fetch('https://api.github.com/users/${user.name}');
    let githubUserJson = await githubUser.json();

    let img = document.createElement('img');
    img.scr = img.avatar_url;
}