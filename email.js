
    (function() {
        emailjs.init("qsBKBNing2WdpYNM5"); // Replace with your EmailJS Public Key
    })();

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Collect form values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;


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
        // let templateParams = {
        //     from_name: name,
        //     from_email: email,
        //     to_email: "connectbuildersemobilemarket@gmail.com",
        //     subject: subject,
        //     message: message
        // };
        let templateParams = {
            from_name: name,
            from_email: email,
            reply_to: email,
            to_email: "connectbuildersemobilemarket@gmail.com",
            subject: subject,
            message: message
        };
        

        // Send email using EmailJS
        emailjs.send("service_5b46uka", "template_vn3g7dq", templateParams)
            .then(function(response) {
                alert("Email sent successfully!");
                document.getElementById("contactForm").reset(); // Clear the form
            }, function(error) {
                alert("Failed to send email. Please try again.");
                console.error("EmailJS Error:", error);
            });
    });
