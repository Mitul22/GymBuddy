document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Make an API call to register the user
    fetch("/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert("Registration failed: " + data.error);
        } else {
            alert("Registered successfully!");
            // Redirect to login or details page
            window.location.href = "/login.html";
        }
    });
});
