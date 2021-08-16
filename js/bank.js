document.getElementById('login-submit').addEventListener('click', function () {
    // get email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'jasim@gmail.com' && userPassword == '100bar') {
        window.location.href = 'another.html'
    }
});