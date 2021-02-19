const userBtn = document.querySelectorAll(".user-button");
userBtn.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.classList.toggle("selected");
  });
  button.addEventListener("mouseup", () => {
    button.classList.toggle("selected");
  });
});
