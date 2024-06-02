var maxValue = 100;
var randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log("Random Number:", randomNumber);
var isCorrectGuess = false;
var guesses = [18, 45, 76, 89, 95, 50];
var i = 0;
while (!isCorrectGuess && i < guesses.length) {
    var guess = guesses[i];
    console.log("Guess: " + guess);
    if (guess === randomNumber) {
        isCorrectGuess = true;
        console.log("Correct Guess!");
    }
    else {
        if (guess < randomNumber) {
            console.log("Wrong Guess! Too Low.");
        }
        else {
            console.log("Wrong Guess! Too High.");
        }
    }
    i++;
}
