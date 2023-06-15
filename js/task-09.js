/* Write a script that changes the background colors of the <body> element via inline style when clicking on button.change-color and outputs the color value to span.color.

Use the getRandomHexColor function to generate a random color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const body = document.body;

const changeBackgroundColor = () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
};

changeColorButton.addEventListener("click", changeBackgroundColor);
