document.addEventListener("DOMContentLoaded", () => {

    /* ================= PROJECT FILTER ================= */

    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter = button.dataset.filter;

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            projects.forEach(project => {

                if (filter === "all" || project.classList.contains(filter)) {
                    project.classList.remove("hide");
                } else {
                    project.classList.add("hide");
                }

            });

        });

    });


    /* ================= NAVBAR SCROLL ================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            navbar.style.background = "rgba(8,11,18,0.96)";

        } else {

            navbar.style.background = "rgba(8,11,18,0.88)";

        }

    });


    /* ================= SCROLL REVEAL ================= */

    const revealElements = document.querySelectorAll(
        ".section-heading, .project-card, .skill-category, .cert-card, .stat-card, .about-highlight"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });

});
