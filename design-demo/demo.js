var sign;

function data() {
    sign = document.getElementById("sign").value.toLowerCase();
    console.log(sign);

    document.getElementById("yoursign").style.display = "none";
    document.getElementById("get").style.display = "none";

    let columns = document.getElementsByClassName("column");

    for (let i = 0; i < columns.length; i++) {
        columns[i].style.backgroundColor = "rgb(247, 232, 248)";
    }

    document.getElementById("mydata").innerHTML = "<h1>" + sign + "<br><br></h1>" + sign + " database data here";
    document.getElementById("getapi").style.display = "inline";
}

function api() {

    const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
    fetch(URL, {
        method: 'POST'
    })
    .then(response => response.json())
    .then(json => {
        const results = json;
        console.log(results);

        delete results["date_range"];
        document.getElementById("apidata").innerHTML = "";
        for(i in results) {
            fixedi = i.replaceAll("_", " ");
            document.getElementById("apidata").innerHTML += "<b>" + fixedi + ":</b>  <i>" + results[i] + "</i><br><br>";
        }   
    });
    
}
