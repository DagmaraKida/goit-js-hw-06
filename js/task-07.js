/* Write a script that responds to changes in the value of input#font-size-control (input event) and changes the inline style of span#text by updating the font-size property. As a result, the text size will change responding to scrollbar dragging.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span> */

const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

function changeSize() {
  text.style.fontSize = `${input.value}px`;
}

input.addEventListener("input", changeSize);
