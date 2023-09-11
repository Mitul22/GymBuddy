document.addEventListener("DOMContentLoaded", function() {
    // Check if Register form exists
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", handleRegister);
    }

    // Check if Login form exists
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
    }
});

function handleRegister(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

  // Register user
  fetch("/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password })
})
.then(response => response.json())
.then(data => {
    if (data.error) {
        alert("Registration failed: " + data.error);
    } else {
        alert("Registered successfully!");
        // Redirect to details.html directly after successful registration
        window.location.href = "/details.html";
    }
});
}

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Authenticate user
    fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert("Login failed: " + data.error);
        } else {
            localStorage.setItem("token", data.token);
            window.location.href = "/details.html";
        }
    });
}
