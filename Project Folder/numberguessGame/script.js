const maxAttempts = 7;
let targetNumber = 0;
let attempts = 0;

const result = document.querySelector("#result");
const form = document.querySelector("form");
const guessesList = document.querySelector("#guesses-list");
const guess = document.querySelector("#number-field");
const guessesCounter = document.querySelector("#attempt-counter");

const startGame = () => {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessesList.innerHTML = "";
  guess.value = "";
};

const handleGuess = (e) => {
  e.preventDefault();

  let guessNumber = guess.value;

  if (parseInt(guessNumber) < targetNumber) {
    result.innerText = "Too Low";
  } else if (parseInt(guessNumber) > targetNumber) {
    result.innerText = "Too High";
  } else {
    result.innerText = "You Guessed Correct";
    alert("Congratulations!");
    return;
  }

  ++attempts;
  guessesCounter.innerHTML = `<p>Attempt ${attempts}/${maxAttempts}</p>`;
  guessesList.innerHTML += `<li>${guessNumber}</li>`;
};

form.addEventListener("submit", (event) => handleGuess(event));
startGame();
