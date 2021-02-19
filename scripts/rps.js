// Rock, Paper, Scissors (v1)

// Create player and computer score variables

let playerScore;
let computerScore;

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

// Function to play a single round against the computer

function playRound(playerSelection, computerSelection) {
  // Convert both player and computer selections to lower case

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // Check each individual case to see who wins!

  switch (true) {
    // Player chooses rock, computer chooses scissors (player wins)

    case playerSelection === "rock" && computerSelection === "scissors":
      playerScore += 1;
      return "You win! Rock beats scissors!";

    // Player chooses rock, computer chooses paper (player loses)

    case playerSelection === "rock" && computerSelection === "paper":
      computerScore += 1;
      return "You lose! Paper beats rock...";

    // Player chooses paper, computer chooses rock (player wins)

    case playerSelection === "paper" && computerSelection === "rock":
      playerScore += 1;
      return "You win! Paper beats rock!";

    // Player chooses paper, computer chooses scissors (player loses)

    case playerSelection === "paper" && computerSelection === "scissors":
      computerScore += 1;
      return "You lose! Scissors beats paper...";

    // Player chooses scissors, computer chooses rock (player loses)

    case playerSelection === "scissors" && computerSelection === "rock":
      computerScore += 1;
      return "You lose! Rock beats scissors...";

    // Player chooses scissors, computer chooses paper (player wins)

    case playerSelection === "scissors" && computerSelection === "paper":
      playerScore += 1;
      return "You win! Scissors beats paper!";

    // Both players choose the same (tie result)

    default:
      playerScore += 1;
      computerScore += 1;
      return `It's a tie! You both chose ${playerSelection}.`;
  }
}

// Function to play given number of rounds with score tracking

function playGame(rounds) {
  // Create player input variable

  let playerInput;

  // Reset scores to zero

  playerScore = 0;
  computerScore = 0;

  // Create loop based on requested number of rounds

  for (i = 0; i < rounds; i++) {
    // Get choice from player

    playerInput = prompt(
      "Please enter your move:",
      "e.g. rock, paper, or scissors"
    );

    // Play round and log result to the console

    console.log(playRound(playerInput, computerPlay()));

    // Log current or final score to the console

    if (i + 1 < rounds) {
      console.log(
        `The current score is: Player ${playerScore} - Computer ${computerScore}.`
      );
    } else {
      console.log(
        `That's it! The final score is: Player ${playerScore} - Computer ${computerScore}.`
      );
    }
  }

  // Alert the player that the game is over

  return "The game is over - thanks for playing!";
}
