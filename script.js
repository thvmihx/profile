document.getElementById("contactForm").addEventListener("submit", function(event) {
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    } else if (message.trim() === "") {
        alert("Please write a message.");
        event.preventDefault();
    }
});

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

