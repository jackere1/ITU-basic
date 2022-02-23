var hariultuud = ["ар хударга","микроны босс","сургууль минь баяртай","гурван найз","сэргээш"];

var answer = '';
var maxWrong = 5;
var mistakes = 0;
var guessed = [];
var wordStatus = null;
var asuultuud = ['Үхрийн хошного долоож үзсэн үү чи?', 'Залуу минь чи хурдаа нэм!', 'Жигжидийн Билигт!!!', 'Иб нь Лойгоно ш дээ?', 'Одноо Ирдээ, Явдаа'];

function randomWord() {
  var Random = Math.floor(Math.random() * hariultuud.length);
  answer = hariultuud[Random];
  Hint = asuultuud[Random];
}

function generateButtons() {
  let buttonsHTML = 'абвгдеёжзийклмноөпрстуүфхцчшщъыьэюя'.split('').map(letter =>
    `
      <button class="keyboardButton" id='`+ letter+`' onClick="guesser('` + letter + `')">
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function guesser(chosenLetter) {
  if(guessed.indexOf(' ') == -1){
    guessed.push(' ');
  }
  else{
    null;
  }
  guessed.indexOf(' ') == -1 ? guessed.push(' ') : null;


  if(guessed.indexOf(chosenLetter) == -1){
    guessed.push(chosenLetter);
  }
  else{
    null;
  }
  guessed.indexOf(chosenLetter) == -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) == -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = '' + mistakes + '.jpg';
}

function checkIfGameWon() {
  if (wordStatus == answer) {
    document.getElementById('hangmanPic').src = 'happy.png';
    document.getElementById('keyboard').innerHTML = 'Гоеээшдээ Homie';
  }
}

function checkIfGameLost() {
  if (mistakes == maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'Хариулт: ' + answer;
    document.getElementById('keyboard').innerHTML = 'Суга, явж монгол кино үз';
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}
function giveHint(){
  document.getElementById('Hint').innerHTML = Hint;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = '0.jpg';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
  giveHint();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
giveHint();
generateButtons();
guessedWord();