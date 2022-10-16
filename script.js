const container = document.querySelector(".container");
const button = document.querySelector("button");
// Test
function setupGrid(value) {
  if (container.firstChild) {
    container.innerHTML = "";
  }
  for (i = 0; i < value * value; i++) {
    const newSquare = document.createElement("div");
    newSquare.className = "square";
    newSquare.style.width = `${600 / value}px`;
    newSquare.style.height = `${600 / value}px`;
    newSquare.style.background = "lightgrey";
    container.appendChild(newSquare);
  }
}

button.addEventListener("click", () => {
  let gridValue = prompt("Enter grid size:");
  gridValue > 0 && gridValue <= 100 ? setupGrid(gridValue) : alert("Value must be in between 0 to 100.");
});

container.addEventListener("mouseover", (e) => {
  if (e.target.matches(".square")) {
    e.target.style.background = "black";
  }
});