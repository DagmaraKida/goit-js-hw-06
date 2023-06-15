/* Write a script to manage the login form.

Form submission (form.login-form) must be processed on the submit event.
The page must not reload when the form is submitted.
If the form has empty fields, display alert saying that all fields must be filled in.
As soon as the user has filled in all the fields and submitted the form, collect the field values into an object, where the field name will be the property name and the field value will be the property value. Use the elements property to access form elements.
Display the object with the entered data in the console and clear the values of the form fields using the reset method. */

// Get the login form element
const loginForm = document.querySelector(".login-form");

// Add submit event listener to the form
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission from reloading the page

  // Get the form fields
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  // Check vor empty fields
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("All fields must be filled in");
    return; // Stop if empty fields
  }

  // Create an object for storing data
  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  // Display the object
  console.log(formData);

  // Reset the form
  event.currentTarget.reset();
});
