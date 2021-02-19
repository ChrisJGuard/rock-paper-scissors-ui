// Rock, Paper, Scissors (v2 - interacts with HTML!)

// Create and initialise player score, computer score, and count variables
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

// Function to produce computer move
function computerPlay() {
  // Set computer bias levels (equal chance by default)
  const lowerBiasLevel = 1 / 3;
  const upperBiasLevel = 2 / 3;

  // Generate random number for computer choice
  let computerChoice = Math.random();

  // Return corresponding game move based on computer choice
  switch (true) {
    // First, check to see if higher than the upper boundary
    case upperBiasLevel < computerChoice:
      return "rock";
    // If not, check to see if higher than the lower boundary
    case lowerBiasLevel < computerChoice:
      return "paper";
    // If not either of these, return the only remaining option
    default:
      return "scissors";
  }
}

// Function to update commentary with the winner
function checkWinner() {
  if (playerScore > computerScore)
    updateCommentary("That's it! You win the match! Go again?");
  else if (playerScore < computerScore)
    updateCommentary("That's it! I'm afraid you lose the match. Go again?");
  else updateCommentary("That's it! It's a draw! Fancy another match?");
}

// Function to reset the game
function gameReset() {
  playerScore = 0;
  computerScore = 0;
  roundCount = 0;
}

// Function to play a single round against the computer
function playRound(playerSelection, computerSelection) {
  // Add to the round count
  roundCount += 1;
  updateRounds(roundCount);

  // Check each individual case to see who wins!
  switch (true) {
    // Player chooses rock, computer chooses scissors (player wins)
    case playerSelection === "rock" && computerSelection === "scissors":
      playerScore += 1;
      updateScore(playerScore, computerScore);
      updateCommentary("You win! Rock beats scissors!");
      break;

    // Player chooses rock, computer chooses paper (player loses)
    case playerSelection === "rock" && computerSelection === "paper":
      computerScore += 1;
      updateScore(playerScore, computerScore);
      updateCommentary("You lose! Paper beats rock...");
      break;

    // Player chooses paper, computer chooses rock (player wins)
    case playerSelection === "paper" && computerSelection === "rock":
      playerScore += 1;
      updateScore(playerScore, computerScore);
      updateCommentary("You win! Paper beats rock!");
      break;

    // Player chooses paper, computer chooses scissors (player loses)
    case playerSelection === "paper" && computerSelection === "scissors":
      computerScore += 1;
      updateScore(playerScore, computerScore);
      updateCommentary("You lose! Scissors beats paper...");
      break;

    // Player chooses scissors, computer chooses rock (player loses)
    case playerSelection === "scissors" && computerSelection === "rock":
      computerScore += 1;
      updateScore(playerScore, computerScore);
      updateCommentary("You lose! Rock beats scissors...");
      break;

    // Player chooses scissors, computer chooses paper (player wins)
    case playerSelection === "scissors" && computerSelection === "paper":
      playerScore += 1;
      updateScore(playerScore, computerScore);
      updateCommentary("You win! Scissors beats paper!");
      break;

    // Both players choose the same (tie result)
    default:
      playerScore += 1;
      computerScore += 1;
      updateScore(playerScore, computerScore);
      updateCommentary(`It's a tie! You both chose ${playerSelection}.`);
  }

  // If this is the last round, update winner and reset the game
  if (roundCount === 5) {
    checkWinner();
    gameReset();
  }
}

// Event listeners for gaming purposes!

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound("rock", computerPlay()));
paper.addEventListener("click", () => playRound("paper", computerPlay()));
scissors.addEventListener("click", () => playRound("scissors", computerPlay()));
