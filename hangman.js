const Hangman = function(word, remainingGuesses){
    this.word = word.toLowerCase().split('');
    this. remainingGuesses = remainingGuesses;
    this.guessLetters = ['c','n']
}
Hangman.prototype.getPuzzle=function(){
    let puzzle = '';
    this.word.forEach((letter)=>{
        if(this.guessLetters.includes(letter) || letter === ' '){
            puzzle += letter;
        }else{
            puzzle += '*'
        }
    })
    return puzzle;
}
const game1 = new Hangman('Cat', 2)
console.log(game1.getPuzzle())

const game2 = new Hangman('New Jersey', 4)
console.log(game2.getPuzzle())