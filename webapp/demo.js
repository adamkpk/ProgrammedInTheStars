var sign;

function data() {
    var sign;
    if(document.getElementById("yoursign").style.display != "none") {
        sign = document.getElementById("sign").value.toLowerCase();
        if(sign == "select"){
            alert("Please select a sign before submitting!");
            return;
        }
    } else if(document.getElementById("yourbday").style.display != "none") {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const validDaysPerMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        let month = parseInt(document.getElementById("month").value);
        let day = parseInt(document.getElementById("day").value);
        if(month == "select"|| day == "select"){
            alert("Please select your birth month and day before submitting!");
            return;
        } else if(day > validDaysPerMonth[month]){
            alert(`${months[month]} ${day} is not a valid date!\nPlease select a valid birth date.`);
            return;
        }

        // -- Below block of code translates birth day and month into zodiac sign --
        if((month == 2 && day >= 21) || (month == 3 && day <= 19)) sign = "aries";
        if((month == 3 && day >= 20) || (month == 4 && day <= 20)) sign = "taurus";
        if((month == 4 && day >= 21) || (month == 5 && day <= 21)) sign = "gemini";
        if((month == 5 && day >= 22) || (month == 6 && day <= 22)) sign = "cancer";
        if((month == 6 && day >= 23) || (month == 7 && day <= 22)) sign = "leo";
        if((month == 7 && day >= 23) || (month == 8 && day <= 22)) sign = "virgo";
        if((month == 8 && day >= 23) || (month == 9 && day <= 23)) sign = "libra";
        if((month == 9 && day >= 24) || (month == 10 && day <= 21)) sign = "scorpio";
        if((month == 10 && day >= 22) || (month == 11 && day <= 21)) sign = "sagittarius";
        if((month == 11 && day >= 22) || (month == 0 && day <= 19)) sign = "capricorn";
        if((month == 0 && day >= 20) || (month == 1 && day <= 18)) sign = "aquarius";
        if((month == 1 && day >= 19) || (month == 2 && day <= 20)) sign = "pisces";
    }
    
    console.log(sign);

    document.getElementById("yoursign").style.display = "none";
    document.getElementById("yourbday").style.display = "none";
    document.getElementById("changesubmitmode").style.display = "none";
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

function chngMode(mode) {
    if(mode == 'bday') {
        document.getElementById("bdayoption").style.display = "none";
        document.getElementById("signoption").style.display = "inline";
        document.getElementById("chnglabel").innerHTML = "Recalled your sign? &#9803;";
        document.getElementById("yoursign").style.display = "none";
        document.getElementById("yourbday").style.display = "block";
    } else if(mode == 'sign') {
        document.getElementById("signoption").style.display = "none";
        document.getElementById("bdayoption").style.display = "inline";
        document.getElementById("chnglabel").innerHTML = "Don't know your sign? &#127874;";
        document.getElementById("yoursign").style.display = "block";
        document.getElementById("yourbday").style.display = "none";
    }
}