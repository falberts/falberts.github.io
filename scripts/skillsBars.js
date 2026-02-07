function initSkillBarsAnimation() {
  const skillsSection = document.getElementById("skills-content");
  const bars = skillsSection.querySelectorAll(".exp-bar");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        bars.forEach((bar, index) => {
          const targetWidth = bar.dataset.width;

          setTimeout(() => {
            bar.style.width = targetWidth + "%";

            const computedStyle = window.getComputedStyle(bar);
            let leftMargin = computedStyle.marginLeft;

            if (!leftMargin || leftMargin === "0px") {
                leftMargin = (100 - targetWidth) + "%";
                bar.style.marginLeft = leftMargin;
            }
          }, index * 120);
        });

        observer.unobserve(skillsSection);
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(skillsSection);
}
