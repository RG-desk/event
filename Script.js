document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for Navigation
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Form Submission Handling
    document.getElementById("contactForm").addEventListener("submit", async function (e) {
        e.preventDefault();
        const form = this;
        const formMessages = document.getElementById("formMessages");

        try {
            let response = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                formMessages.innerHTML = "<p style='color: #ffcc00;'>Message Sent Successfully!</p>";
                form.reset();
            } else {
                formMessages.innerHTML = "<p style='color: red;'>Error sending message!</p>";
            }
        } catch (error) {
            formMessages.innerHTML = "<p style='color: red;'>Network Error!</p>";
        }
    });
});
