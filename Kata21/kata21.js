let prompt = require("prompt-sync")();

// code below (replace this example)
function numberGuesser(){
  let randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);
  let attempts = 0;
  let previousGuesses = [];
  let success = false;
  console.log("Guess a number: ")
  let answer = Number(prompt("> "));
  //console.log(typeof answer);

  while (success !== true){
    if (answer === randomNumber){
      attempts++;
      console.log(`You got it! You took ${attempts} attempts!`);
      success = true;
    } else if (previousGuesses.includes(answer)){
      console.log("Already Guessed!\nGuess a number:");
      answer = Number(prompt("> "));
    } else if (answer < randomNumber){
      console.log("Too low!\nGuess a number:");
      attempts++;
      previousGuesses.push(answer);
      answer = Number(prompt("> "));
    } else if (answer > randomNumber){
      console.log("Too high!\nGuess a number:");
      attempts++;
      previousGuesses.push(answer);
      answer = Number(prompt("> "));
    } else if (isNaN(answer)){
      console.log("Not a number! Try again!\nGuess a number:");
      answer = Number(prompt("> "));
    }
  } 
  return
}

numberGuesser();