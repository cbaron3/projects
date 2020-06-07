const form = document.getElementById('form');
const username_field = document.getElementById('username');
const email_field = document.getElementById('email');
const password_field = document.getElementById('password');
const confirm_password_field = document.getElementById('confirmation');

// Return uppercase field name
function get_field_name(field) {
    return field.id.charAt(0).toUpperCase() + field.id.slice(1)
}

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
function check_email(input) {
    // Sourced from -> https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, 'Email is invalid');
    }
}

// Check required fields
function check_required(inputs) {
    inputs.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${get_field_name(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Check field matches length requirements
function check_length(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${get_field_name(input)} must be at least ${min} characters`)
    } else if(input.value.length > max) {
        showError(input, `${get_field_name(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input);
    }
}

// Check if field B matches field A
function check_match(input_a, input_b) {
    if(input_a.value !== input_b.value) {
        showError(input_b, 'Passwords do not match');
    } else {
        showSuccess(input_b);
    }
}

/* Event Listeners */

// Handle form validation on submit
form.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log('Form submitted');

    check_required([username_field, email_field, password_field, confirm_password_field]);

    check_length(username_field, 3, 15);
    check_length(password_field, 6, 25);

    check_email(email_field);

    check_match(password_field, confirm_password_field);
});