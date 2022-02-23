function recieve(number) {
    document.cookie = number;
}
function send() {
    return document.cookie;
}
function news() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const xmlDoc = xhttp.responseXML;
        const item = xmlDoc.getElementsByTagName("item");
        for(var i = 0; i < 4; i++){
            let news = "";
            news += "<p>" + item[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</p>";
            console.log(news);
            document.getElementById("new" + i).innerHTML = news;
        }
    }
    xhttp.open("GET", "Xml.xml");
    xhttp.send();
}
news();

function run(number) {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const xmlDoc = xhttp.responseXML;
        const item = xmlDoc.getElementsByTagName("item");
        let news = "";
        news += "<h2 style='padding: 0 13%;'>" + item[number].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</h2>" + "<img src='" + item[number].getElementsByTagName("zurag")[0].childNodes[0].nodeValue + "' width=500px height=auto style='margin: 5% 30%; border: 10px solid orange; border-radius: 5%;'>" 
        + "<p>" + item[number].getElementsByTagName("description")[0].childNodes[0].nodeValue + "</p>";
        console.log(news);
        document.getElementById("main").innerHTML = news;
    }
    xhttp.open("GET", "Xml.xml");
    xhttp.send();
}



