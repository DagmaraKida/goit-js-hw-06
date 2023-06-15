/* Write a script to create and clear a collection of elements. The user enters the number of elements into input and clicks the New button, after which a collection is rendered. When you click on the Clear button, the collection is cleared.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Create a createBoxes(amount) function that takes one parameter, a number. The function creates as many <div> as specified in amount and adds them to div#boxes.

The dimensions of the very first <div> are 30px by 30px.
Each element after the first one should be 10px wider and higher than the previous one.
All elements must have a random HEX background color. Use the ready-made getRandomHexColor function to get a color.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Create a destroyBoxes() function that clears the contents of div#boxes, thereby removing all created elements. */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const allBoxesParent = document.querySelector("#controls");
const boxesList = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = Number(inputEl.value);
  clearBoxes();
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesList.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  clearBoxes();
}

function clearBoxes() {
  boxesList.innerHTML = "";
}
