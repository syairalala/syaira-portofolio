// =============================
// SMOOTH NAVIGATION
// =============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =============================
// SCROLL REVEAL
// =============================

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-grid, " +
    ".service-card, " +
    ".skill-group, " +
    ".project, " +
    ".small-project, " +
    ".project-row-single, " +
    ".experience-item, " +
    ".achievement-card, " +
    ".certificate-card, " +
    ".gallery-item"
);


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.1
    }

);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// =============================
// NAVBAR BACKGROUND
// =============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(11, 16, 21, 0.94)";

    } else {

        navbar.style.background =
            "rgba(11, 16, 21, 0.78)";

    }

});