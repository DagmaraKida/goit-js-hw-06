/* The counter consists of a span and buttons, which, when clicked, should increase and decrease its value by one.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Create a variable, counterValue, that will store the current counter value and initialize it with 0.
Add listeners for clicks on the buttons; inside them, increase or decrease the value of the counter.
Update the interface with the new value of the variable counterValue. */

const counter = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let counterValue = 0;

function buttonDecrementClick() {
  counterValue -= 1;
  counter.textContent = counterValue;
}

function buttonIncrementClick() {
  counterValue += 1;
  counter.textContent = counterValue;
}
decrementButton.addEventListener("click", buttonDecrementClick);
incrementButton.addEventListener("click", buttonIncrementClick);
