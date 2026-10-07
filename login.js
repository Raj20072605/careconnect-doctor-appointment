const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;

    const savedUser =
        JSON.parse(localStorage.getItem("user"));

    if (
        savedUser &&
        savedUser.email === email &&
        savedUser.password === password
    ) {

        loginMessage.textContent =
            "✅ Login successful!";

        loginMessage.style.color = "green";

        setTimeout(function() {

            window.location.href = "dashboard.html";

        }, 1000);

    } else {

        loginMessage.textContent =
            "❌ Invalid email or password. Please register first.";

        loginMessage.style.color = "red";

    }

});
