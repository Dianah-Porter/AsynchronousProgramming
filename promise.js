let promise = new Promise(function(resolve, reject){
     // executor (the producing code, "singer")
     setTimeout(()=> resolve("done"),100);
    
}).then(a=> console.log(a)).catch(a=>console.log("Error "))


function getWeather(){
    return new Promise(function(resolve, reject){
        setTimeout(()=> resolve("Sunny"),100);
    })
}
promise = getWeather();
promise.then(function(data){
    console.log(`First promise ${data}`);
})


function getWeatherIcon(weather){
    return new Promise(function(resolve,reject){
        setTimeout(()=> {
            switch(weather){
                case 'Sunny':
                    resolve('🌞')
                    break
                case 'Cloudy':
                    resolve('💭')
                    break
                case 'Rainy':
                    resolve('🌧️')
                    break
                default:
                    reject('NO ICON FOUND')
            }
        }, 100)
    })
}
function onSuccess(data){
    console.log(`Success ${data}`)
}
function onError(error){
    console.log(`Error: ${error}`);
}

getWeather()
    .then(getWeatherIcon) //the first to be resolved from getweather is comes in 
    .then(onSuccess, onError)

new Promise((resolve, reject)=>{
    setTimeout(()=> resolve("value"), 2000)
})
.finally(()=> "Promise ready ")
.then(result => console.log(result));

//-----Promise chaining-----

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let state = false;   //false runs catch while true runs then operations 
        if(state){
            resolve(1)
        }
        else{
            reject("Error")
        }

    }, 1000);
}).then(result=>{
    console.log(result);
    return result * 2;
}).then(result=>{
    console.log(result)
    return result * 4;
}).then(
    result=> console.log(result), n=>console.log(n)   //another way of adding catch but not recommended
)//.catch(n=>console.log(n));

