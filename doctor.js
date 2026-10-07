const searchInput = document.getElementById("doctorSearch");
const specialtyFilter = document.getElementById("specialtyFilter");
const doctors = document.querySelectorAll(".doctor-card");

function filterDoctors() {

    const searchText = searchInput.value.toLowerCase();
    const specialty = specialtyFilter.value;

    doctors.forEach(function(doctor) {

        const name =
            doctor.querySelector(".doctor-name").textContent.toLowerCase();

        const doctorSpecialty =
            doctor.querySelector(".doctor-specialty").textContent;

        const matchesSearch =
            name.includes(searchText);

        const matchesSpecialty =
            specialty === "all" ||
            doctorSpecialty === specialty;

        if (matchesSearch && matchesSpecialty) {
            doctor.style.display = "inline-block";
        } else {
            doctor.style.display = "none";
        }

    });
}

searchInput.addEventListener("input", filterDoctors);
specialtyFilter.addEventListener("change", filterDoctors);
