  let attempts = 3;

function validateLogin(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let studentid = document.getElementById("studentid").value;
    let remember = document.getElementById("remember").checked;

    let correctUsername = "admin";
    let correctPassword = "1234";
    let correctStudentId = "167167167"

    if (attempts <= 0) {
        alert("You are locked out. Refresh the page to try again.");
        return;
    }

    if (username !== correctUsername || password !== correctPassword) {

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
        else if (studentid.length = 0) {
            alert("Please input student ID.");
        }
             
        else {
            alert("Invalid username, student ID or password!");
        }

        alert("Attempts left: " + attempts);
        return;
    }

    alert("Login successful!");

    if (remember) {
        localStorage.setItem("savedUser", username);
    } else {
        localStorage.removeItem("savedUser");
    }

    window.location.href = "dashboard.html";
}

function toggleInstructions() {
  var element = document.getElementById("instructions");
  
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

function take_activity() {
    window.alert("Oops! It seems you're no longer able to complete this activity after the deadline!")
}

function movie_clip() {
    window.alert("Redirecting you to GDrive: Give Up Tommorrow (2011) Movie...")

    window.location.href = "https://drive.google.com/file/d/1XJXCIEEVXK8SlSnsFjIOljz-UoaORO-S/view"
}

function submit_output() {
    window.alert("Oops! It seems you're no longer able to submit a file after the deadline!")
}
