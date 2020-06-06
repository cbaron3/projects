const form = document.getElementById('form');
const username_field = document.getElementById('username');
const email_field = document.getElementById('email');
const password_field = document.getElementById('password');
const confirm_password_field = document.getElementById('confirm-password');

// Show an error message on input
function showError(input, message) {
    const form_control = input.parentElement;
    const small_tag = form_control.querySelector('small')

    // Change input outline to red on error
    form_control.className = 'form-control error'

    // Display error message
    small_tag.innerText = message;
}

// Show a success message on input
function showSuccess(input) {
    const form_control = input.parentElement;

    // Change input outline to green on success
    form_control.className = 'form-control success'
}

// Check email validity
function is_valid_email(email) {
    // Sourced from -> https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/* Event Listeners */

// Handle form validation on submit
form.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log('Form submitted');
    
    if(username_field.value === '') {
        showError(username_field, 'Username is required');
    } else {
        showSuccess(username_field);
    }

    if(email_field.value === '') {
        showError(email_field, 'Email is required');
    } else if(!is_valid_email(email_field.value)) {
        showError(email_field, 'Email is invalid');
    } else {
        showSuccess(email_field);
    }

    if(password_field.value === '') {
        showError(password_field, 'Password is required');
    } else {
        showSuccess(password_field);
    }

    if(confirm_password_field.value === '') {
        showError(confirm_password_field, 'Must confirm password');
    } else {
        showSuccess(confirm_password_field);
    }
});