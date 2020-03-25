const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const email = document.getElementById('phoneNumber');

//Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form__control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show Success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form__control success';    
}

//Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

//Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if (input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input);
        }
    });
}

// Get fieldname
function getFieldName (input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username, email]);

    checkLength(username, 3, 50);
    checkEmail(email);
});