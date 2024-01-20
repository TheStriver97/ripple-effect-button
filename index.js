const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
  const rect = btnEl.getBoundingClientRect(); // Get the position of the button relative to the viewport
  const x = event.pageX - rect.left; // Adjust the calculation based on the button's position
  const y = event.pageY - rect.top; // Adjust the calculation based on the button's position

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});
