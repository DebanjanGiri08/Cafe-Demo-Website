const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("open");
    });

    document
        .querySelectorAll("#navMenu a")
        .forEach(function(link) {
            link.addEventListener("click", function() {
                navMenu.classList.remove("open");
            });
        });
}

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", function() {
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {
            event.preventDefault();
            formMessage.textContent =
                "Thank you! Your message has been received.";
            contactForm.reset();
        }
    );
}