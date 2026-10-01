document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        const role = document.querySelector(
            'input[name="role"]:checked'
        ).value;

        const email = document.getElementById("email").value;

        localStorage.setItem("currentUser", email);
        localStorage.setItem("userRole", role);

        if (role === "user") {

            window.location.href =
                "user dashboard.html";

        }

        else if (role === "collector") {

            window.location.href =
                "collectordashboard.html";

        }

        else if (role === "admin") {

            window.location.href =
                "admindashboard.html";

        }

    });
