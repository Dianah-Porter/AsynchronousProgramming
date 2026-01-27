/*Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds*/

function displayNumber(){
    let count = 1;
    let intervalId = setInterval(()=> {
        console.log(count);
        count++;
    } ,2000);

    setTimeout(()=>{
        clearInterval(intervalId);
        console.log('Clearing the Interval');
    }, 5000)
}

displayNumber();



//setTimeout using await 
