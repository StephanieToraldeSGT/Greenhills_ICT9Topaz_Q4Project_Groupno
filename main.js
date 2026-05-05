function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let correctUsername = "admin";
    let correctPassword = "1234";

    if (username === correctUsername && password === correctPassword) {
        window.alert("Login successful!");

        window.location.href = "dashboard.html";
    }
    else if (username === password) {
        window.alert("Username and password cannot be the same!");
    }
    else if (username.length < 5) {
        window.alert("Username must be at least 5 characters long!");
    }
    else if (password.length < 5) {
        window.alert("Password must be at least 5 characters long!");
    }
    else {
        window.alert("Invalid username or password!");
    }
}

function toggleInstructions() {
    let instructions = document.getElementById("instructions");
    let current = window.getComputedStyle(instructions).display;
    if (current === "none") {
        instructions.style.display = "block";
    } else {
        instructions.style.display = "none";
    }
}

//
