document.addEventListener("DOMContentLoaded", function() {

    const buttons = document.querySelectorAll(".filters button");
    const projects = document.querySelectorAll(".project-card");

    buttons.forEach(function(button) {

        button.addEventListener("click", function() {

            buttons.forEach(function(btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const filter = button.textContent.trim().toLowerCase();

            projects.forEach(function(project) {

                if (filter === "all") {
                    project.style.display = "flex";
                }
                else if (project.classList.contains(filter)) {
                    project.style.display = "flex";
                }
                else {
                    project.style.display = "none";
                }

            });

        });

    });

});
