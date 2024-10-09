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

    // Save data to local storage
    localStorage.setItem("fullname", fullname);
    localStorage.setItem("dob", dob);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("gender", gender);

    alert("Form submitted successfully!");

    // Optionally, display the saved information
    console.log("Saved Information:");
    console.log("Full Name:", localStorage.getItem("fullname"));
    console.log("Date of Birth:", localStorage.getItem("dob"));
    console.log("Email:", localStorage.getItem("email"));
    console.log("Phone:", localStorage.getItem("phone"));
    console.log("Gender:", localStorage.getItem("gender"));

    // Clear the input fields after submission
    document.getElementById("registration-form").reset();

    return false; // Prevent form submission for demo purposes
}