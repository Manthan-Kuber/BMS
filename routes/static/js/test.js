const signupForm = document.getElementById("signupForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const dob = document.getElementById("dob");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const aadharNumber = document.getElementById("aadharNumber");
const phoneNumber = document.getElementById("phoneNumber");
const address = document.getElementById("address");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const dobValue = dob.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();
  const aadharNumberValue = aadharNumber.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const addressValue = address.value.trim();

  if (firstNameValue === "") {
    setErrorFor(firstName, "Please enter your first name");
  } else {
    setSuccessFor(firstName);
  }

  function setErrorFor(input,message){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    small.innerText = message;
    formControl.className = 'form-control error';
  }
}
