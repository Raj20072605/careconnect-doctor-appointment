const appointment = localStorage.getItem("appointment");

if (appointment) {

    const data = JSON.parse(appointment);

    document.getElementById("patientName").textContent =
        data.patientName;

    document.getElementById("patientEmail").textContent =
        data.email;

    document.getElementById("doctor").textContent =
        data.doctor;

    document.getElementById("date").textContent =
        data.date;

    document.getElementById("time").textContent =
        data.time;

    document.getElementById("reason").textContent =
        data.reason;

} else {

    document.getElementById("patientName").textContent =
        "No appointment found";

}
