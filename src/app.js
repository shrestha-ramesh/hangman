const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const number = Math.floor(Math.random() * Math.floor(8));
const wordArray = ['Cat', 'Dog', 'Nepal', 'America','Ramesh','Suraj','Lamp','Telephone','Everest']
const numberArray  = [2,2,4,5,4,3,3,6,5]
const game1 = new Hangman(`${wordArray[number]}`, `${numberArray[number]}`)

puzzleEl.textContent=game1.getPuzzle();
guessesEl.textContent=game1.getStatusMessage();
console.log(game1.status)

window.addEventListener('keypress', function(e){
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuesses(guess)
    puzzleEl.textContent=game1.getPuzzle();
    guessesEl.textContent=game1.getStatusMessage();
    console.log(guess);
    console.log(game1.status)

})