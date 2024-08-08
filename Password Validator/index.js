function checkPasswords() {
    var password = prompt("Enter your password:");
    var confirmPassword = prompt("Confirm your password:");

    if (password === confirmPassword) {
        alert("Password Matched. Password validation Successful.");
    } else {
        alert("Password didn't match. Password validation unsuccessful.");
    }
}

checkPasswords();
