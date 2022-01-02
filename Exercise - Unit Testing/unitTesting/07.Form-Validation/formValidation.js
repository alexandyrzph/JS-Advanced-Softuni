function validate() {
    const usernamePattern = /([a-z0-9]{3,20})/;
    const passwordPattern = /([\w]{5,15})/;
    const emailPattern = /(^[\w]+@[\w]+.[\w]+$)/;

    let isValidInput = true;

    const submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', ()=> {
    const usernameField = document.getElementById('username');
        if(!usernamePattern.test(usernameField.value)) {
            isValidInput =false;
            usernameField.style.borderColor = 'red';
        } else {
            usernameField.style.borderColor = 'none';
        }
        const passwordField = document.getElementById('password');
        const confirmPasswordField = document.getElementById('confirm-password');

        if(!passwordPattern.test(passwordField.value)) {
            isValidInput = false;
            passwordField.style.borderColor = 'red';
        } else {
            passwordField.style.borderColor = 'none';
        }

        if (passwordField.value != confirmPasswordField) {
            isValidInput = false;
            passwordField.style.borderColor = 'red';
        } else {
            passwordField.style.borderColor = '';
        }

        const emailField = document.getElementById('email');
        if(!emailPattern.test(emailField.value)) {
            isValidInput = false;
            emailField.style.border = 'none';
        } else {
            emailField.style.border = 'none';
        }
        const validDiv = document.getElementById('valid');
        if (isValidInput) {

        }
    })

    document.getElementById('checkbox').addEventListener('change', (e)=> {
        const companyField = document.getElementById('companyInfo');
        if (e.target.checked) {
            isChecked = true;
            document.getElementById('companyInfo').style.display = 'block';
            const companyNumber = document.getElementById('companyNumber');
            if(companyNumber.value >= 1000 || cNumber.value >9999) {
                cNumber.style.borderColor = 'red';
            } else {
                cNumber.style.borderColor = 'none';
            }
        } else {
            companyField.style.display = 'none';
        }
    })

}
