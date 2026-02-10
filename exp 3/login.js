document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Demo credentials (replace with backend later)
    if (username === "admin" && password === "admin123") {
        alert("Login successful!");
        window.location.href = "index.html"; // redirect to main website
    } else {
        alert("Invalid username or password");
    }
});
