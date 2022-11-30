var sign;

function data() {
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
        if(!month || !day){
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

    //document.getElementById("mydata").innerHTML = "<h1>" + sign + "<br><br></h1>" + sign + " database data here";
    /*$.post(
        url+'?data='+JSON.stringify({
            'sign':sign
        }),
        response
    );*/

    switch(sign) {

        case "aries":

            document.getElementById("mydata").innerHTML= 
            "<h1>" + sign.toUpperCase() + "</h1>" + 
            "<img src='icons/icons8-aries-96.png' alt='Aries icon'>" +"<br>"+ 
            "<h2>" + "(March 21-April 19)" + "</h2>" + "<span>" + "Aries element: " + "</span>" + "fire" + "<br>" + 
            "<br>" + "<span>" + "Aries symbol: " + "</span>" + "the ram" + "<br>" +
            "<br>" + "<span>" + "Aries ruling planet: " + "</span>" + "Mars" + "<br>" + 
            "<br>" + "<span>" + "Aries ruling house: " + "</span>" + "first house of self" + "<br>" +
            "<br>" + "<span>" + "Aries traits: " + "</span>" + 
            `This fiery sign is the first sign in 
            the zodiac. Aries are leaders, propelling themselves 
            forward on adventures, climbing corporate ladders, 
            and embracing independence. They're an energetic 
            bunch - passionate, courageous, free-spirited, and 
            somewhat turbulent. But for all the positive Aries 
            traits, there's always a darker underbelly. Jealousy, 
            impatience, moodiness, and impulsiveness might be 
            struggles for Aries. If they can keep those things 
            in check, Aries has the ability and energy to lead 
            an exciting, adrenaline-filled, successful life.`;

        break;
    
        case "taurus":

            document.getElementById("mydata").innerHTML= 
            "<h1>" + sign.toUpperCase() + "</h1>" +
            "<img src='icons/icons8-taurus-96.png' alt='Taurus icon'>" +"<br>"+ 
            "<h2>" + "(April 20-May 20)" + "</h2>"+ "<span>" + "Taurus element: " + "</span>" + "earth" + "<br>" +
            "<br>" + "<span>" + "Taurus symbol: " + "</span>" + "the bull" + "<br>" +
            "<br>" + "<span>" + "Taurus ruling planet: " + "</span>" + "Venus" + "<br>" +
            "<br>" + "<span>" + "Taurus ruling house: " + "</span>" + "second house of value" + "<br>" +
            "<br>" + "<span>" + "Taurus traits: " + "</span>" + 
            `Grounded is the name of the game when 
            it comes to Taurus. This wandering bull is determined, 
            responsible, and practical. Taurus is not a fan of sudden 
            changes or insecurity of any kind. These traits can lead to 
            stubbornness and rigidity in relationships and life, but the 
            bull has the admirable ability to stick with projects, friends, 
            and partners for a seemingly impossible amount of time and see 
            things through until completion. They're also great with finances, 
            preferring to work hard to earn and save money in order to attain 
            the security they desperately need. They are patient and one of 
            the most reliable signs of the zodiac.`;

        break;
    
        case "gemini":

            document.getElementById("mydata").innerHTML= 
            "<h1>" + sign.toUpperCase() + "</h1>" + 
            "<img src='icons/icons8-gemini-96.png' alt='Gemini icon'>" +"<br>"+ 
            "<h2>" + "(May 21-June 20)" + "</h2>" + "<span>" + "Gemini element: " + "</span>" + "air" + "<br>" +
            "<br>" + "<span>" + "Gemini symbol: " + "</span>" + "the twins" + "<br>" +
            "<br>" + "<span>" + "Gemini ruling planet: " + "</span>" + "Mercury" + "<br>" +
            "<br>" + "<span>" + "Gemini ruling house: " + "</span>" + "third house of communication" + "<br>" +
            "<br>" + "<span>" + "Gemini traits: " + "</span>" + 
            `This air sign is fueled by curiosity, socializing, 
            intellectualizing, and flitting from one thing to the next. Geminis are 
            represented by the celestial twins, or duality, depicting two sides: 
            they can be outgoing and playful, then serious and restless. They feel 
            there isn't enough time to soak up all that life has to offer, but they 
            can be indecisive, understandably, when they're interested in so many 
            different things. Geminis are fun-loving creatives who are awesome to be 
            around. These social beings may struggle with commitment - to a job or a 
            partner - because of their need for adventure, new experiences, new 
            information, and the next exciting thing. These traits mean they do well 
            in situations where they can be creative, philosophize with others, and 
            have certain level of freedom and flexibility.`;

        break;
    
        case "cancer":

            document.getElementById("mydata").innerHTML= 
            "<h1>" + sign.toUpperCase() + "</h1>" + 
            "<img src='icons/icons8-cancer-96.png' alt='Cancer icon'>" +"<br>"+
            "<h2>" + "(June 20-July 22)" + "</h2>" + "<span>" + "Cancer element: " + "</span>" + "water" + "<br>" +
            "<br>" + "<span>" + "Cancer symbol: " + "</span>" + "the crab" + "<br>" +
            "<br>" + "<span>" + "Cancer ruling planet: " + "</span>" + "Moon" + "<br>" +
            "<br>" + "<span>" + "Cancer ruling house: " + "</span>" + "fourth house of home" + "<br>" +
            "<br>" + "<span>" + "Cancer traits: " + "</span>" + 
            `Cancer is a water sign that's ruled by the moon, 
            which causes these sensitive beings to feel the influences of the lunar 
            cycles whether they like it or not. Cancers are emotional, empathetic, and 
            highly imaginative people. On the flip side, the crab can be withdrawn and 
            mysterious at times, opening up only to those closest to them. They aren't 
            a sign that's interested in casual encounters and one-night stands. While 
            they're cautious with their trust, once you make it into a Cancer's heart, 
            they are loyal and passionate friends and lovers.`;
         
            
        break;
    
        case "leo":

            document.getElementById("mydata").innerHTML= 
            "<h1>" + sign.toUpperCase() + "</h1>" + 
            "<img src='icons/icons8-leo-96.png' alt='Leo icon'>" +"<br>"+ 
            "<h2>" + "(July 23-August 22)" + "</h2>" + "<span>" + "Leo element: " + "</span>" + "fire" + "<br>" +
            "<br>" + "<span>" + "Leo symbol: " + "</span>" + "the lion" + "<br>" +
            "<br>" + "<span>" + "Leo ruling planet: " + "</span>" + "Sun" + "<br>" +
            "<br>" + "<span>" + "Leo ruling house: " + "</span>" + "fifth house of self-expression" + "<br>" +
            "<br>" + "<span>" + "Leo traits: " +"</span>" + `Fiery Leo might be the most exuberant sign in the zodiac. 
            They enjoy the spotlight and unite all of those around them with their humor 
            and magnetism. The "King of the Jungle," Leos are natural-born leaders who are 
            ready to take the reins and control any situation. They must be mindful, however, 
            not to control things that aren't meant for it - such someone else's life and 
            choices. Leos are warm, self-aware, and driven. They do well with people who 
            match their drive and passion so that their flame doesn't overpower someone else's 
            light.`;

        break;
    
        case "virgo":

            document.getElementById("mydata").innerHTML= 
            "<h1>" + sign.toUpperCase() + "</h1>" + 
            "<img src='icons/icons8-virgo-96.png' alt='Virgo icon'>" +"<br>"+ 
            "<h2>" + "(August 23-September 22)" + "</h2>" + "<span>" + "Virgo element: " + "</span>" + "earth" + "<br>" +
            "<br>" + "<span>" + "Virgo symbol: " + "</span>" + "the virgin" + "<br>" +
            "<br>" + "<span>" + "Virgo ruling planet: " + "</span>" + "Mercury" + "<br>" +
            "<br>" + "<span>" + "Virgo ruling house: " + "</span>" + "sixth house of health" + "<br>" +
            "<br>" + "<span>" + "Virgo traits: " + "</span>" + `The cautious and analytical Virgo represents their earth sign 
            well. They are conservative and hard-working, and they have a deep sense of humanity. 
            Although they may seem indifferent, Virgos are actually passionate people who choose 
            their confidants wisely after careful observation over an extended period of time. 
            Virgo has an eye for every little detail, and they thrive in environments where they 
            can use their practical and organizational skills. With that said, Virgo's traits and 
            attention to detail can lead to overthinking, worry, and rigidity if left unchecked. 
            They aren't materialistic and often prefer a more minimalist lifestyle that values 
            practicality over grandeur.`;

        break;
    
        case "libra":

            document.getElementById("mydata").innerHTML= 
            "<h1>" + sign.toUpperCase() + "</h1>" + 
            "<img src='icons/icons8-libra-96.png' alt='Libra icon'>" +"<br>"+ 
            "<h2>" + "(September 23 - October 22)" + "</h2>" + "<span>" + "Libra element: " + "</span>" + "air" + "<br>" +
            "<br>" + "<span>" + "Libra symbol: " + "</span>" + "the scales" + "<br>" +
            "<br>" + "<span>" + "Libra ruling planet: " + "</span>" + "Venus" + "<br>" +
            "<br>" + "<span>" + "Libra ruling house: " + "</span>" + "seventh house of relationships" + "<br>" +
            "<br>" + "<span>" + "Libra traits: " + "</span>" + `This intellectual, diplomatic air sign is the only symbol in 
            the zodiac that's an inanimate object. Libras value diplomacy, fairness, and cooperation. 
            They'll often do everything possible to maintain peace and harmony. Libra loves having a 
            partner to share life with, and a rich life they will have - they value culture, art, and 
            the finer things in life. Their need for equality, fairness, peace, and harmony can lead 
            to a fear of confrontation and indecisiveness, however. Libra's traits make them great 
            friends and listeners, and they can make excellent leaders despite a certain lack of 
            initiative at times.`;
            
        break;
    
        case "scorpio":

            document.getElementById("mydata").innerHTML= 
            "<h1>" + sign.toUpperCase() + "</h1>" + 
            "<img src='icons/icons8-scorpio-96.png' alt='Scorpio icon'>" +"<br>"+ 
            "<h2>" + "(October 23 - November 21)" + "</h2>" + "<span>" + "Scorpio element: " + "</span>" + "water" + "<br>" +
            "<br>" + "<span>" + "Scorpio symbol: " + "</span>" + "the scorpion" + "<br>" +
            "<br>" + "<span>" + "Scorpio ruling planet: " + "</span>" + "Pluto and Mars" + "<br>" +
            "<br>" + "<span>" + "Scorpio ruling house: " + "</span>" + "eighth house of transformation" + "<br>" + 
            "<br>" + "<span>" + "Scorpio traits: " + "</span>" + `Scorpios often get a bad rap for their "sting," but this water 
            sign is one of the most intensely emotional in the zodiac. They're passionate, resourceful, 
            brave, and extremely loyal friends. They can be distrusting and jealous, but their intuition 
            is usually on point - so it would be wise to be honest with them in the first place. 
            Scorpios are historically known for being the most sexual of the zodiac, but they choose 
            their partners carefully based on sexual attraction, intelligence, and emotional connection. 
            Scorpios have an air of mystery to them and are excellent listeners, but they are slow to 
            reveal their own secrets. They have tremendous resilience and can be very strategic in the 
            way they move through all aspects of their life.`;

        break;
    
        case "sagittarius":

            document.getElementById("mydata").innerHTML= 
            "<h1>" + sign.toUpperCase() + "</h1>" + 
            "<img src='icons/icons8-sagittarius-96.png' alt='Sagittarius icon'>" +"<br>"+ 
            "<h2>" + "(November 22 - December 21)" + "</h2>" + "<span>" + "Sagittarius element: " + "</span>" + "fire" + "<br>" + 
            "<br>" + "<span>" + "Sagittarius symbol: " + "</span>" + "the archer" + "<br>" + 
            "<br>" + "<span>" + "Sagittarius ruling planet: " + "</span>" + "Jupiter" + "<br>" + 
            "<br>" + "<span>" + "Sagittarius ruling house: " + "</span>" + "ninth house of adventure" + "<br>" + 
            "<br>" + "<span>" + "Sagittarius traits: " + "</span>" + `This fire sign is one of the biggest travelers in the zodiac. 
            With an inquisitive and adventurous spirit, Sagittarius needs the freedom to do their own thing, 
            explore the world, and constantly seek out the meaning of life. They'll thrive in situations 
            where they can freely express themselves verbally, creatively, and physically. Not known for 
            their tact, they have a keenness for honesty and might struggle to find ways of delivering their 
            truth in a way that is easy to digest and avoids hurting people. Sagittarius' traits mean they 
            do well with the unknown, trusting that the universe will provide everything they need to live a 
            full and exciting life.`;

        break;
    
        case "capricorn":

            document.getElementById("mydata").innerHTML= 
            "<h1>" + sign.toUpperCase() + "</h1>" + 
            "<img src='icons/icons8-capricorn-96.png' alt='Capricorn icon'>" +"<br>"+ 
            "<h2>" + "(December 22 - January 19)" + "</h2>" + "<span>" + "Capricorn element: " + "</span>" + "earth" + "<br>" + 
            "<br>" + "<span>" + "Capricorn symbol: " + "</span>" + "the goat" + "<br>" + 
            "<br>" + "<span>" + "Capricorn ruling planet: " + "</span>" + "Saturn" + "<br>" + 
            "<br>" + "<span>" + "Capricorn ruling house: " + "</span>" + "tenth house of public image" + "<br>" + 
            "<br>" + "<span>" + "Capricorn traits: " + "</span>" + `The ever-serious Capricorn stays true to their earth-sign roots. 
            Responsibility and discipline are strong Capricorn traits for the persistent and organized sign 
            and lead them to success in their pursuits. Once they've warmed up, they're passionate companions 
            who have no trouble taking initiative. Although their rigidity may cause problems in relationships, 
            Capricorns are grounded, calm, reasonable, and willing to find solutions to any problems that may arise.`;

        break;
    
        case "aquarius":

            document.getElementById("mydata").innerHTML= 
            "<h1>" + sign.toUpperCase() + "</h1>" + 
            "<img src='icons/icons8-aquarius-96.png' alt=' icon'>" +"<br>"+ 
            "<h2>" + "(January 20 - February 18)" + "</h2>" + "<span>" + "Aquarius element: " + "</span>" + "air" + "<br>" +
            "<br>" + "<span>" + "aquarius symbol: " + "</span>" + "the water bearer" + "<br>" + 
            "<br>" + "<span>" + "Aquarius ruling planet: " + "</span>" + "Uranus" + "<br>" + 
            "<br>" + "<span>" + "Aquarius ruling house: " + "</span>" + "eleventh house of community" + "<br>" + 
            "<br>" + "<span>" + "Aquarius traits: " + "</span>" + `Aquarius is passionate and quirky. They're sometimes quiet and shy; 
            other times, they're outspoken and temperamental. They have deep compassion for humanity and are 
            devoted to equality, freedom of expression, and intellectual conversations. An air sign, they
             value mental stimulation above most other things. While they may appear aloof, they're highly 
             sensitive people who just require a little more time to warm up. These free-spirited, 
             imaginative, and slightly inconsistent people thrive when others can relate to and respect the 
             many sides of their personality.`;

        break;
    
        case "pisces":

            document.getElementById("mydata").innerHTML= 
            "<h1>" + sign.toUpperCase() + "</h1>" + 
            "<img src='icons/icons8-pisces-96.png' alt='Pisces icon'>" +"<br>"+ 
            "<h2>" + "(February 19 - March 20)" + "</h2>" + "<span>" + "Pisces element: " + "</span>" +  "water" + "<br>" +
            "<br>" + "<span>" + "Pisces symbol: " + "</span>" + "the fish" + "<br>" + 
            "<br>" + "<span>" + "Pisces ruling planet: " + "</span>" + "Neptune" + "<br>" + 
            "<br>" + "<span>" + "Pisces ruling house: " + "</span>" + "twelfth house of the unconscious" + "<br>" + 
            "<br>" + "<span>" + "Pisces traits: " + "</span>" + `One of the most tolerant signs in the zodiac, this water sign is highly 
            intuitive and compassionate. Pisces can be selfless to the point of martyrdom, and they have an 
            affinity for all things water. They make excellent partners and friends, always providing a 
            listening ear and unconditional love. These traits mean they need to be mindful not to absorb and 
            take on the emotions of those around them, which can lead to depression and anxiety. While they 
            are gentle and wise, they don't take well to criticism, even if it's constructive. If you're a 
            Pisces, take care to advocate for yourself, because your needs matter, too.`;

        break;
    
    }

    document.getElementById("getapi").style.display = "inline";
    
}

function response(data, status){
    var response = JSON.parse(data);
    console.log(data);
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