//a-z
const useg = "абвгдеёжкзийклмноөпрстуүфхцчшщъьэюя";
document.getElementById("keyboard").insertAdjacentHTML("beforeend", useg.split("").map(j => "<button class='button' onclick='send(`" + j + "`)'>" + j + "</button>").join(""));
//
var asuult = ['Үхрийн хошного долоож үзсэн үү чи?', 'Залуу минь чи хурдаа нэм!', 'Жигжидийн Билигт!!!', 'Иб нь Лойгоно ш дээ?', 'Одноо Ирдээ, Явдаа'];

//var asuult = ["Нар, сар, од гурвын дунд юу байдаг вэ?","Дусал дусал бороотой vдшээр дурласан охиндоо дуу аялан очсон Дондог ямар цэцэг аваачиж єгсєн бэ?","Мєсєн дээр мєнгєн аяга сар тэр юу вэ?","Олсыг юунаас гаргаж авдаг вэ?","Дусал дусал бороотой vдшээр дурласан охиндоо дуу аялан очсон Дондог ямар цэцэг аваачиж єгсєн бэ?","Интернэт технологийн хичээл гоё ингэсэнүүдээ?","Ингэний сүүгээр хийсэн ундаа?"];
var asuultbox;
var hariult = ["ар хударга","микроны босс","сургууль минь баяртай","гурван найз","сэргээш"];

//var hariult = ["таслал","нойтон","олз","ургамал","нойтон","тиймээ","хоормог"];
var dugaar;
var ami = 5;
//function
function start() {
    dugaar = Math.floor(Math.random() * asuult.length);
    document.getElementById("question").innerHTML = asuult[dugaar];
    asuultbox = new Array(hariult[dugaar].length).fill("_");
    document.getElementById("answer").innerHTML = asuultbox.join(" ");
}
start();
//shalgah
function send(useg) {
    for(var i = 0; i < hariult[dugaar].length; i++) {
        if(" " == hariult[dugaar][i] && asuultbox[i] == "_") {
            asuultbox[i] = " ";
            document.getElementById("answer").innerHTML = asuultbox.join(" ");
            if(asuultbox.indexOf("_") == -1) {
                document.getElementById("question").innerHTML = 'Та яллаа!';
                document.getElementById("answer").innerHTML = '3 сек дараа автоматаар refresh хийх гэж байна...';
                setTimeout(() => {
                    location.reload();
                }, 3000);
            }
            correct = 1;
            break; 
        }
    }

    var correct = 0;
    for(var i = 0; i < hariult[dugaar].length; i++) {
        if(useg == hariult[dugaar][i] && asuultbox[i] == "_") {
            asuultbox[i] = useg;
            document.getElementById("answer").innerHTML = asuultbox.join(" ");
            if(asuultbox.indexOf("_") == -1) {
                document.getElementById("question").innerHTML = 'Гоеээшдээ Homie';
                // document.getElementById("answer").innerHTML = '3 сек дараа автоматаар refresh хийх гэж байна...';
                // setTimeout(() => {
                //     location.reload();
                // }, 3000);
            }
            correct = 1;
            break; 
        }
    }
    if(correct == 0) {
        ami--;
        document.getElementById("life").innerHTML = ami;
        document.getElementById("man").src = "images/" + (5 - ami) + ".jpg";
    }
    if(ami == 0) {
        document.getElementById("question").innerHTML = 'Суга, явж монгол кино үз';
        // document.getElementById("answer").innerHTML = '3 сек дараа автоматаар refresh хийх гэж байна...';
        // setTimeout(() => {
        //     location.reload();
        // }, 3000);
    }
}

function reset() {
    location.reload();
}