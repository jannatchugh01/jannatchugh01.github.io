const buttons = document.querySelectorAll(".filters button");
const projects = document.querySelectorAll(".project-card");

buttons.forEach(button => {

```
button.addEventListener("click", () => {

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.textContent.toLowerCase();

    projects.forEach(project => {

        if(filter === "all"){
            project.style.display = "flex";
        }
        else if(project.classList.contains(filter)){
            project.style.display = "flex";
        }
        else{
            project.style.display = "none";
        }

    });

});
```

});
