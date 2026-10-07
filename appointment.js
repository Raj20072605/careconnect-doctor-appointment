const form = document.getElementById("appointmentForm");
const confirmation = document.getElementById("confirmation");


// Load registered user

const savedUser = localStorage.getItem("user");

if (savedUser) {

    const user = JSON.parse(savedUser);

    document.getElementById("patientName").value =
        user.name;

    document.getElementById("email").value =
        user.email;

}


// Submit appointment

form.addEventListener("submit", function(event) {

    event.preventDefault();


    const patientName =
        document.getElementById("patientName").value;

    const email =
        document.getElementById("email").value;

    const doctor =
        document.getElementById("doctor").value;

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;

    const reason =
        document.getElementById("reason").value;


    const appointment = {

        patientName: patientName,
        email: email,
        doctor: doctor,
        date: date,
        time: time,
        reason: reason

    };


    localStorage.setItem(
        "appointment",
        JSON.stringify(appointment)
    );


    confirmation.innerHTML = `

        <div>

            <h2>🎉 Appointment Confirmed!</h2>

            <p>
                Your appointment has been booked successfully.
            </p>

            <hr>

            <p>
                <strong>Patient:</strong>
                ${patientName}
            </p>

            <p>
                <strong>Doctor:</strong>
                ${doctor}
            </p>

            <p>
                <strong>Date:</strong>
                ${date}
            </p>

            <p>
                <strong>Time:</strong>
                ${time}
            </p>

            <p>
                <strong>Reason:</strong>
                ${reason || "General consultation"}
            </p>

            <br>

            <a href="dashboard.html">
                View My Dashboard
            </a>

        </div>

    `;


    confirmation.style.display = "block";

    form.reset();


    // Restore user details after reset

    if (savedUser) {

        const user = JSON.parse(savedUser);

        document.getElementById("patientName").value =
            user.name;

        document.getElementById("email").value =
            user.email;

    }

});
    

   
