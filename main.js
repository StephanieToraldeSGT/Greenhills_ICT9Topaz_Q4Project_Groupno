    let attempts = 3;
function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let remember = document.getElementById("remember").checked;

    let correctUsername = "admin";
    let correctPassword = "1234";

    if (attempts <= 0) {
        alert("Too many failed attempts. Refresh the page to try again.");
        return;
    }

    if (username === correctUsername && password === correctPassword) {
        alert("Login successful!");
        
        if (remember) {
            localStorage.setItem("savedUser", username);
        } else {
            localStorage.removeItem("savedUser");
        }

        window.location.href = "dashboard.html";
        return;
    }

    attempts--;

    if (username === password) {
        alert("Username and password cannot be the same!");
    }
    else if (username.length < 5) {
        alert("Username must be at least 5 characters long!");
    }
    else if (password.length < 5) {
        alert("Password must be at least 5 characters long!");
    }
    else {
        alert("Invalid username or password!");
    }

    alert("Attempts left: " + attempts);
}
