//Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds

let displayNumber = (number)=>{
    let interval = setInterval(()=> {
        console.log(number);
    }, 2000);

    setTimeout(()=> {
        clearInterval(interval);
    }, 5000);
    return '';
}
console.log(displayNumber(32))