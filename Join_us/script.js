
function validateForm() {
    const fullname = document.getElementById("fullname").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const gender = document.getElementById("gender").value;

    // Basic validation (can be extended)
    if (!fullname || !dob || !email || !phone || !gender) {
        alert("Please fill out all fields.");
        return false; // Prevent form submission
    }

    alert("Form submitted successfully!");
    console.log(fullname);
    console.log(dob);
    console.log(email);
    console.log(phone);
    console.log(gender);

    return true; // Allow form submission
}
