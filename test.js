// JavaScript File: scripts.js

// Handle sign-up form submission
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = signupForm.elements.username.value;
    const email = signupForm.elements.email.value;
    const password = signupForm.elements.password.value;

    // Perform signup logic here (e.g., send data to a server)
    console.log("User signed up with username:", username, "email:", email);

    // Reset form
    signupForm.reset();
});

// Handle login form submission
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = loginForm.elements.username.value;
    const password = loginForm.elements.password.value;

    // Perform login logic here (e.g., check credentials on a server)
    console.log("User logged in with username:", username);

    // Reset form
    loginForm.reset();
});

// Handle horse ride booking form submission
const rideBookingForm = document.getElementById("rideBookingForm");
rideBookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const date = rideBookingForm.elements.date.value;
    const time = rideBookingForm.elements.time.value;

    // Perform booking logic here (e.g., send booking data to a server)
    console.log("Horse ride booked for date:", date, "time:", time);

    // Reset form
    rideBookingForm.reset();
});

// Handle riding lesson booking form submission
const lessonBookingForm = document.getElementById("lessonBookingForm");
lessonBookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const date = lessonBookingForm.elements.date.value;
    const time = lessonBookingForm.elements.time.value;

    // Perform booking logic here (e.g., send booking data to a server)
    console.log("Riding lesson booked for date:", date, "time:", time);

    // Reset form
    lessonBookingForm.reset();
});

// Handle traveling with horses booking form submission
const travelBookingForm = document.getElementById("travelBookingForm");
travelBookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const date = travelBookingForm.elements.date.value;

    // Perform booking logic here (e.g., send booking data to a server)
    console.log("Travel with horses booked for date:", date);

    // Reset form
    travelBookingForm.reset();
});
