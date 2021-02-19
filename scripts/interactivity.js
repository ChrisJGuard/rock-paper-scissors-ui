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
