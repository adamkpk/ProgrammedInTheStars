function api() {
    var sign = document.getElementById("sign").value.toLowerCase();
    console.log(sign);
    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
    fetch(URL, {
        method: 'POST'
    })
    .then(response => response.json())
    .then(json => {
        const results = json;
        console.log(results);

        delete results["date_range"];
        document.getElementById("result").innerHTML = "";
        for(i in results) {
            fixedi = i.replaceAll("_", " ");
            document.getElementById("result").innerHTML += "<b>" + fixedi + ":</b>  <i>" + results[i] + "</i><br><br>";
        }
        
    });
    
}
