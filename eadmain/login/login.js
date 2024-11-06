document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation (you can replace this with actual login logic)
    if (username === "admin" && password === "1234") {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").textContent = "Login successful!";
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").textContent = "Invalid username or password.";
    }
});