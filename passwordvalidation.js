////////Create account password validation////////

//function that validates a password
//displays message whether password is valid
//submit button is inactive until password is valid

//field displays text if password is valid
//requires tag with id = displayPasswordValidation
var displayPasswordValidation = document.getElementById('displayPasswordValidation');

//requires submit button with id = createAccountButton
//requires password entry field with id = createPassword
var createButton = document.getElementById("createAccountButton");
var createPassword = document.getElementById("createPassword");

//track password as it is typed
if (createPassword != null) {
    createPassword.addEventListener('keyup', realTimeValidation);
}
//validate password and disable create account(submit)
//button until password is valid
function realTimeValidation() {

    //regex; password must contain at least 1 number and must be 8 characters long
    //look ahead determines minimum (of 1 number)
    //after look ahead determines max
    passwordRegex = /^(?=.*[0-9]){1,8}[a-zA-Z0-9]{8,}$/;

    //if password field is empty submit button is inactive
    if (createPassword.value === '') {

        displayPasswordValidation1.classList.remove('active');
        displayPasswordValidation1.classList.remove('false');
        displayPasswordValidation1.innerText = "";

    }

    //if password is valid, submit button is active and a field
    //displays that the password is valid
    else if (passwordRegex.test(createPassword.value)) {

        displayPasswordValidation.innerText = "Valid password"
        createButton.disabled = false;
        createButton.classList.add('.activeButton');
        displayPasswordValidation1.classList.add('active');
    }

    //if passowrd does not match regex criteria
    //display invalid password
    else if (createPassword.value != '') {

        displayPasswordValidation.innerText = "Invalid password"
        createButton.disabled = true;
        displayPasswordValidation1.classList.remove('active');  
        displayPasswordValidation1.classList.add('false');
    }
}