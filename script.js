document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       PROJECT FILTER
       ========================================== */

    const filters = document.querySelectorAll(".filter");
    const projects = document.querySelectorAll(".project");

    filters.forEach(filter => {

        filter.addEventListener("click", () => {

            const selected = filter.dataset.filter;

            filters.forEach(item => {
                item.classList.remove("active");
            });

            filter.classList.add("active");

            projects.forEach(project => {

                if (
                    selected === "all" ||
                    project.classList.contains(selected)
                ) {

                    project.classList.remove("hide");

                } else {

                    project.classList.add("hide");

                }

            });

        });

    });


    /* ==========================================
       SCROLL REVEAL
       ========================================== */

    const revealItems = document.querySelectorAll(
        ".section-heading, .project, .skill-row, .certificate, .about-grid, .intro-content"
    );

    revealItems.forEach(item => {
        item.classList.add("reveal");
    });


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


    revealItems.forEach(item => {
        observer.observe(item);
    });


    /* ==========================================
       NAVBAR SCROLL EFFECT
       ========================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            navbar.style.background = "rgba(248,248,245,0.94)";
            navbar.style.backdropFilter = "blur(12px)";

        } else {

            navbar.style.background = "transparent";
            navbar.style.backdropFilter = "none";

        }

    });


    /* ==========================================
       SMOOTH NAVIGATION
       ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});
