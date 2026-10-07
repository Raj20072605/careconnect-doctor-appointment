const appointmentData = localStorage.getItem("appointment");
const userData = localStorage.getItem("user");


// Load Patient Profile

if (userData) {

    const user = JSON.parse(userData);

    document.getElementById("patientName").textContent =
        user.name;

    document.getElementById("patientEmail").textContent =
        user.email;

    document.getElementById("patientPhone").textContent =
        user.phone;

}


// Load Appointment

if (appointmentData) {

    const appointment = JSON.parse(appointmentData);

    document.getElementById("doctor").textContent =
        appointment.doctor;

    document.getElementById("date").textContent =
        appointment.date;

    document.getElementById("time").textContent =
        appointment.time;

    document.getElementById("reason").textContent =
        appointment.reason;

    document.getElementById("appointmentCount").textContent = "1";

} else {

    document.getElementById("doctor").textContent =
        "No appointment";

    document.getElementById("date").textContent = "-";

    document.getElementById("time").textContent = "-";

    document.getElementById("reason").textContent = "-";

    document.getElementById("appointmentCount").textContent = "0";

}


// Cancel Appointment

const cancelButton =
    document.getElementById("cancelAppointment");

cancelButton.addEventListener("click", function() {

    const appointment =
        localStorage.getItem("appointment");

    if (appointment) {

        localStorage.removeItem("appointment");

        alert("Appointment cancelled successfully!");

        location.reload();

    } else {

        alert("No appointment available to cancel.");

    }

});
