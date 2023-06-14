/* Write a script that, when typing in the input#name-input input (input event), substitutes its current value into span#name-output. If the input is empty, the span should display the "Anonymous" string.

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */

// Get the input and output elements
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// Add input event listener to the name input
nameInput.addEventListener("input", function (event) {
  // Get the current value of the input
  const inputValue = event.currentTarget.value;

  // Set the value of the name output span
  nameOutput.textContent = inputValue === "" ? "Anonymous" : inputValue;
});
