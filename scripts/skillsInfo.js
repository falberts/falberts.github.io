function initSkillsTooltip() {
  const tooltip = document.getElementById("skill-tooltip");

  const skillsInfo = {
    "skills-python": {
      name: "Python",
      description: "Placeholder"
    },
    "skills-bash": {
      name: "Bash",
      description: "Placeholder"
    },
    "skills-html": {
        name: "HTML",
        description: "Placeholder"
    },
    "skills-css": {
        name: "CSS",
        description: "Placeholder"
    },
    "skills-js": {
        name: "JavaScript",
        description: "Placeholder"
    },
    "skills-php": {
        name: "PHP",
        description: "Placeholder"
    },
    "skills-mysql": {
        name: "MySQL",
        description: "Placeholder"
    },
    "skills-typescript": {
        name: "TypeScript",
        description: "Placeholder"
    },
    "skills-angular": {
        name: "Angular",
        description: "Placeholder"
    },
    "skills-prolog": {
        name: "Prolog",
        description: "Placeholder"
    },
    "skills-react": {
        name: "React",
        description: "Placeholder"
    },
    "skills-java": {
        name: "Java",
        description: "Placeholder"
    },
    "skills-spring": {
        name: "Spring",
        description: "Placeholder"
    },
    "skills-laravel": {
        name: "Laravel",
        description: "Placeholder"
    },
    "skills-csharp": {
        name: "C#",
        description: "Placeholder"
    },
    "skills-dotnet": {
        name: ".NET",
        description: "Placeholder"
    }
  };

  document.querySelectorAll(".skill").forEach(skill => {

    skill.addEventListener("mouseenter", () => {
        tooltip.innerHTML = "";

        const info = skillsInfo[skill.id];

        const h3 = document.createElement("h3");
        h3.textContent = info.name;
        h3.style.margin = "0 0 5px 0";

        const p = document.createElement("p");
        p.textContent = info.description;
        p.style.margin = "0";
        p.style.fontSize = "13px";

        tooltip.appendChild(h3);
        tooltip.appendChild(p);

        tooltip.style.display = "block";

        tooltip.classList.add("visible");
        });

        skill.addEventListener("mouseleave", () => {
        tooltip.classList.remove("visible");
        });


    skill.addEventListener("mousemove", (e) => {
      tooltip.style.left = (e.pageX + 10) + "px";
      tooltip.style.top = (e.pageY + 10) + "px";
    });
  });
}
