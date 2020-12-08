const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('Cat', 2)

puzzleEl.textContent=game1.getPuzzle();
guessesEl.textContent=game1.remainingGuesses;
console.log(game1.status)

window.addEventListener('keypress', function(e){
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuesses(guess)
    puzzleEl.textContent=game1.getPuzzle();
    guessesEl.textContent=game1.remainingGuesses;
    console.log(guess);
    console.log(game1.status)

})