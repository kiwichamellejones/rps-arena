// =========================
// GAME VARIABLES
// =========================

let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];


// =========================
// DOM ELEMENTS
// =========================

const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");

const resultText = document.getElementById("result-text");

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

const resetBtn = document.getElementById("reset-btn");


// =========================
// COMPUTER CHOICE FUNCTION
// =========================

function getComputerChoice() {

  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}


// =========================
// EMOJI DISPLAY FUNCTION
// =========================

function getChoiceEmoji(choice) {

  if (choice === "rock") {
    return "🪨";
  }

  if (choice === "paper") {
    return "📄";
  }

  if (choice === "scissors") {
    return "✂️";
  }

  return "❔";
}


// =========================
// PLAY ROUND FUNCTION
// =========================

function playRound(playerChoice) {

  const computerChoice = getComputerChoice();

  // Display choices
  playerChoiceDisplay.textContent =
    getChoiceEmoji(playerChoice);

  computerChoiceDisplay.textContent =
    getChoiceEmoji(computerChoice);

  // Determine winner
  if (playerChoice === computerChoice) {

    resultText.textContent = "It's a tie!";

  }

  else if (

    (playerChoice === "rock" &&
      computerChoice === "scissors")

    ||

    (playerChoice === "paper" &&
      computerChoice === "rock")

    ||

    (playerChoice === "scissors" &&
      computerChoice === "paper")

  ) {

    playerScore++;

    playerScoreDisplay.textContent = playerScore;

    resultText.textContent =
      "You win this round! 🎉";

  }

  else {

    computerScore++;

    computerScoreDisplay.textContent = computerScore;

    resultText.textContent =
      "Computer wins this round! 🤖";

  }

}


// =========================
// RESET GAME FUNCTION
// =========================

function resetGame() {

  playerScore = 0;
  computerScore = 0;

  playerScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;

  playerChoiceDisplay.textContent = "❔";
  computerChoiceDisplay.textContent = "❔";

  resultText.textContent =
    "Choose your move to begin!";
}


// =========================
// EVENT LISTENERS
// =========================

rockBtn.addEventListener("click", function () {

  playRound("rock");

});

paperBtn.addEventListener("click", function () {

  playRound("paper");

});

scissorsBtn.addEventListener("click", function () {

  playRound("scissors");

});

resetBtn.addEventListener("click", resetGame);