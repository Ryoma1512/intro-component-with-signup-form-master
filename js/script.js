const form = document.querySelector('#form');
const username = document.querySelector('#firstName');
const lastname = document.querySelector('#lastName');
const email = document.querySelector('#emailAddress');
const pass = document.querySelector('#password');

const errorN = document.querySelector('#errorName');
const errorlastN = document.querySelector('#errorLname');
const errorE = document.querySelector('#errorEmail');
const errorP = document.querySelector('#errorPassword');

form.addEventListener('submit', (error) => {
    error.preventDefault();
    if (username.value === ""){
        showError(username, "First Name cannot be empty")
    }
    else{
        success(username);
    }

    if (lastname.value === ""){
        showError(lastname, "Last Name cannot be empty");
    }
    else{
        success(lastname);
    }

    if (email.value === ""){
        showError(email, "Email cannot be empty");
    }
    else if (validateEmail()){
        success(email);
    }
    else{
        showError(email, "This not look like an email");
    }

    if (pass.value === ""){
        showError(pass, "Password cannot be empty");
    }
    else{
        success(pass);
    }
})

function showError(element, message) {
    const small = element.nextElementSibling;
    small.innerText = message;
    small.style.display = "block";
    element.classList.add("error");
  }
  
  function success(element) {
    const small = element.nextElementSibling;
    small.innerText = "";
    small.style.display = "none";
    element.classList.remove("error");
  }
  
  function validateEmail() {
    // Snippet from internet
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(email.value)) {
      return true;
    }
    return false;
  }


