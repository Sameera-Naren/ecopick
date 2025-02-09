document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `username=${username}&password=${password}`
    });

    const result = await response.json();
    document.getElementById("loginMessage").innerText = result.message;

    if (response.ok) {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect on success
    }
});
