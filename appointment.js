const form = document.getElementById("appointmentForm");
const confirmation = document.getElementById("confirmation");

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

        <h2>✅ Appointment Confirmed!</h2>

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
            ${reason}
        </p>

        <p>
            Your appointment has been saved successfully.
        </p>

    `;

    confirmation.style.display = "block";

    form.reset();

});
