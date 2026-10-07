document.addEventListener("DOMContentLoaded", function () {

    console.log("CareConnect loaded successfully!");

    const button = document.querySelector(".hero a");

    if (button) {
        button.addEventListener("click", function () {
            console.log("Find a Doctor button clicked");
        });
    }

});
