function initSkillsTooltip() {
  const tooltip = document.getElementById("skill-tooltip");

  document.querySelectorAll(".skill").forEach(skill => {

    skill.addEventListener("mouseenter", () => {
        tooltip.innerHTML = "";

        const info = document.getElementById(skill.id + "-details")?.innerHTML || "";

        tooltip.innerHTML = info;

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
