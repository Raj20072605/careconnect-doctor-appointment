const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value;

    const savedUser =
        localStorage.getItem("user");


    if (!savedUser) {

        loginMessage.textContent =
            "❌ No account found. Please register first.";

        loginMessage.style.color = "red";

        return;
    }


    const user = JSON.parse(savedUser);


    if (
        user.email === email &&
        user.password === password
    ) {

        loginMessage.textContent =
            "✅ Login successful! Welcome " + user.name + "!";

        loginMessage.style.color = "green";


        localStorage.setItem(
            "loggedIn",
            "true"
        );


        setTimeout(function() {

            window.location.href =
                "dashboard.html";

        }, 1200);


    } else {

        loginMessage.textContent =
            "❌ Incorrect email or password.";

        loginMessage.style.color = "red";

    }

});
