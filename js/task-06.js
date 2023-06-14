/* Write a script that, when focus on input is lost (blur event), checks its contents for the correct number of entered characters.

The number of characters in the input is specified in its data-length attribute.
If the number of characters entered is correct, the input's border turns green, or red with a wrong number.
To add styles, use the valid and invalid CSS classes, which you can find in the task source files.

*/

const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});
