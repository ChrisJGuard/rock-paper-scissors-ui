// Select all buttons for toggle styling
const button = document.querySelectorAll(".user-button");

// Cycle through buttons and add event listeners
button.forEach(toggleSelected);

// Adds mousedown and mouseup class toggles
function toggleSelected(button) {
  button.addEventListener("mousedown", () => {
    button.classList.toggle("selected");
  });
  button.addEventListener("mouseup", () => {
    button.classList.toggle("selected");
  });
}

// Updates commentary div with given text
function updateCommentary(text) {
  const div = document.querySelector(".commentary");
  div.textContent = text;
}

// Updates scoreboard with given scores
function updateScore(player, computer) {
  const div = document.querySelector(".scoreboard");
  div.textContent = player + " - " + computer;
}
