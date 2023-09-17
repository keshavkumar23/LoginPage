document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Here, you can add your login validation logic.
    // For this example, let's assume a username "user" and password "password".
    if (username === "user" && password === "password") {
        window.location.href = "dashboard.html"; // Redirect to the dashboard on successful login.
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password.";
    }
});
