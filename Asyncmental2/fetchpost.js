async function postData(url){
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-type" : "Application/json"
        },
        body: JSON.stringify({name: "Dporter"})
    } );
    let data = await request.json()
    console.log(data)
}
postData()