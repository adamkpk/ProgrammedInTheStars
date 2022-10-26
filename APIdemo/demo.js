function api() {
    const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
    fetch(URL, {
        method: 'POST'
    })
    .then(response => response.json())
    .then(json => {
        const results = json;
        console.log(results);

        delete results["date_range"];

        for(i in results) {
            document.getElementById("result").innerHTML += "<b>" + i + ":</b>  <i>" + results[i] + "</i><br><br>";
        }
        
    });
    
}
