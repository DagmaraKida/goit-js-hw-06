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
