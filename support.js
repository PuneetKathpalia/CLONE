document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Show success alert
    const alertBox = document.createElement("div");
    alertBox.classList.add("alert", "alert-success");
    alertBox.innerText = "Message sent successfully!";
    document.body.appendChild(alertBox);

    // Clear placeholders
    document.querySelectorAll("input, textarea").forEach(function (element) {
        element.value = ''; // Clear the input and textarea values
    });

    // Automatically hide the alert after 3 seconds
    setTimeout(function () {
        alertBox.remove();
    }, 3000);
});
