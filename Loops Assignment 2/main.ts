// 2.Number Guessing Game (Using while loop )
// Objective: Create a simple number guessing game where the user tries to guess a randomly
// generated number between 1 and a specified maximum value using a predefined set of guesses.
// Steps to Follow:
// 1. Set a maximum value: Create a variable to store the maximum value for the number
// guessing game.
// 2. Generate a random number: Use Math.random() and Math.floor() to generate a
// random number between 1 and the maximum value. Log this value to the console for
// development purposes.
// 3. Track the guess status: Create a variable to track whether the user's guess is correct. Set
// it to false initially.
// 4. Simulate user guesses: Use an array to store a series of predefined guesses.
// 5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the
// correct guess is made.

// 6. Check the user's guess: Inside the loop, check if the current guess matches the random
// number. Provide feedback if the guess is too high or too low.

// Step 1: Set a maximum value
let maxValue = 100;

// Step 2: Generate a random number
let randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log("Random Number:", randomNumber);

// Step 3: Track the guess status
let isCorrectGuess = false;

// Step 4: Simulate user guesses
let guesses = [18, 45, 76, 89, 95, 50];

// Step 5: Iterate over guesses
let i = 0;
while (!isCorrectGuess && i < guesses.length) {
    let guess = guesses[i];
    console.log("Guess: " + guess);
    if (guess === randomNumber) {
        isCorrectGuess = true;
        console.log("Correct Guess!");
    } else {
        if (guess < randomNumber) {
            console.log("Wrong Guess! Too Low.");
        } else {
            console.log("Wrong Guess! Too High.");
        }
    }
    i++;
}

