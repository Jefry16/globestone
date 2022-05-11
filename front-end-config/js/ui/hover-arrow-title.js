export const hoverArrow = () => {
  const titles = document.querySelectorAll(".how__title");
  if (titles) {
    titles.forEach((t) => {
      const arrow = t.querySelector(".flecha");
      if (arrow) {
        t.addEventListener("mouseenter", function () {
          arrow.style.backgroundColor = "#bce0d6";
        });

        t.addEventListener("mouseleave", function () {
          arrow.style.backgroundColor = "#99D0C1";
        });

        t.addEventListener("click", function () {
          arrow.classList.toggle("rotate-arrow");
        });
      }
    });
  }
};
