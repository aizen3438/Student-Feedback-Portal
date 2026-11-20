
// Function to display the selected page
function showPage(pageId) {

    let pages = document.querySelectorAll("section");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    window.scrollTo(0, 0);
}

// Navigation menu functionality
document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        showPage(link.dataset.page);
    });
});

// Give Feedback button
document.getElementById("giveFeedback")
    .addEventListener("click", function() {

        showPage("feedback");
    });

// Back to Home button
document.getElementById("backHome")
    .addEventListener("click", function() {

        showPage("home");
    });

// Feedback Form Validation
document.getElementById("feedbackForm")
    .addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let course = document.getElementById("course").value;
    let rating = document.getElementById("rating").value;
    let message = document.getElementById("message").value.trim();

    let valid = true;

    // Clear previous error messages
    document.querySelectorAll(".error").forEach(function(error) {
        error.textContent = "";
    });

    // Validate student name
    if (name === "") {
        document.getElementById("nameError").textContent =
            "Please enter your name.";
        valid = false;
    }

    // Validate email address
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("emailError").textContent =
            "Please enter your email.";
        valid = false;

    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";
        valid = false;
    }

    // Validate course selection
    if (course === "") {
        document.getElementById("courseError").textContent =
            "Please select your course.";
        valid = false;
    }

    // Validate rating
    if (rating === "") {
        document.getElementById("ratingError").textContent =
            "Please select a rating.";
        valid = false;
    }

    // Validate feedback message
    if (message === "") {
        document.getElementById("messageError").textContent =
            "Please write your feedback.";
        valid = false;
    }

    // Display Thank You page if form is valid
    if (valid) {

        document.getElementById("feedbackForm").reset();

        showPage("thankyou");
    }
});
