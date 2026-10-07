const registerForm = document.getElementById("registerForm");
const registerMessage = document.getElementById("registerMessage");

registerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {

        registerMessage.textContent =
            "❌ Passwords do not match.";

        registerMessage.style.color = "red";

        return;
    }

    const user = {

        name: name,
        email: email,
        phone: phone,
        password: password

    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    registerMessage.textContent =
        "✅ Account created successfully!";

    registerMessage.style.color = "green";

    registerForm.reset();

    setTimeout(function() {

        window.location.href = "login.html";

    }, 1200);

});
