const userData = localStorage.getItem("user");
const appointmentData = localStorage.getItem("appointment");


// Patient Information

if (userData) {

    const user = JSON.parse(userData);

    document.getElementById("patientCount").textContent = "1";

    document.getElementById("patientName").textContent =
        user.name;

    document.getElementById("patientEmail").textContent =
        user.email;

    document.getElementById("patientPhone").textContent =
        user.phone;

} else {

    document.getElementById("patientCount").textContent = "0";

}


// Appointment Information

if (appointmentData) {

    const appointment = JSON.parse(appointmentData);

    document.getElementById("appointmentCount").textContent = "1";

    document.getElementById("doctor").textContent =
        appointment.doctor;

    document.getElementById("date").textContent =
        appointment.date;

    document.getElementById("time").textContent =
        appointment.time;

    document.getElementById("reason").textContent =
        appointment.reason || "General consultation";

} else {

    document.getElementById("appointmentCount").textContent = "0";

}


// Admin Cancel Appointment

const cancelButton =
    document.getElementById("adminCancel");

cancelButton.addEventListener("click", function() {

    if (localStorage.getItem("appointment")) {

        localStorage.removeItem("appointment");

        alert("✅ Appointment cancelled by Admin.");

        location.reload();

    } else {

        alert("No appointment available.");

    }

});
