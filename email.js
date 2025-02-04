
    (function() {
        emailjs.init("qsBKBNing2WdpYNM5"); // Replace with your EmailJS Public Key
    })();

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Collect form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;


        console.log(name);
        console.log(email);
        console.log(subject);
        console.log(message);
        
        // Validate form fields
        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Prepare email template parameters
        var templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        };

        // Send email using EmailJS
        emailjs.send("service_y1453zu", "template_sacy3fs", templateParams)
            .then(function(response) {
                alert("Email sent successfully!");
                document.getElementById("contactForm").reset(); // Clear the form
            }, function(error) {
                alert("Failed to send email. Please try again.");
                console.error("EmailJS Error:", error);
            });
    });
