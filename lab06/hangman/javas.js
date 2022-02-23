//a-z
const useg = "абвгдеёжкзийклмноөпрстуүфхцчшщъыьэюя";
document.getElementById("keyboard").insertAdjacentHTML("beforeend", useg.split("").map(j => "<button class='button' onclick='send(`" + j + "`)'>" + j + "</button>").join(""));
//
var asuult = ['Үхрийн хошного долоож үзсэн үү чи?', 'Залуу минь чи хурдаа нэм!', 'Жигжидийн Билигт!!!', 'Иб нь Лойгоно ш дээ?', 'Одноо Ирдээ, Явдаа'];
var answer;
var hariult = ["ар хударга","микроны босс","сайн уу амьдрал минь","гурван найз","сэргээш"];

var dugaar;
var ami = 5;
//function

function start() {
    dugaar = Math.floor(Math.random() * asuult.length);
    document.getElementById("question").innerHTML = asuult[dugaar];
    answer = new Array(hariult[dugaar].length).fill("_");
    document.getElementById("answer").innerHTML = answer.join(" ");
}

start();
//shalgah
function send(useg) {
    for(var i = 0; i < hariult[dugaar].length; i++) {
        if(" " == hariult[dugaar][i] && answer[i] == "_") {
            answer[i] = "<br>";
            document.getElementById("answer").innerHTML = answer.join(" ");
            correct = 1;
            break; 
        }
    }

    var correct = 0;
    for(var i = 0; i < hariult[dugaar].length; i++) {
        if(useg == hariult[dugaar][i] && answer[i] == "_") {
            answer[i] = useg;
            document.getElementById("answer").innerHTML = answer.join(" ");
            if(answer.indexOf("_") == -1) {
                document.getElementById("question").innerHTML = 'Таачлаа ингэснүүдээ';
                document.getElementById("man").src = "images/happy.gif";
                document.getElementById("answer").innerHTML = 'Дахин эхлэх товчийг дар';
               
            }
            correct = 1;
            break; 
        }
    }
    if(correct == 0) {
        if(ami == 0){
            ami = 1;
        }
        ami--;
        document.getElementById("life").innerHTML = 5-ami;
        document.getElementById("man").src = "images/" + (5 - ami) + ".jpg";
    }
    if(ami == 0) {
        document.getElementById("question").innerHTML = 'Явж монгол кино үз';
        document.getElementById("answer").innerHTML = 'Зөв хариулт - ' + hariult[dugaar];
        
    }
}

function reset() {
    location.reload();
}