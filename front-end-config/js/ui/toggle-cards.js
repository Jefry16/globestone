export const toggleCards = () => {
  const cards = document.querySelectorAll(".how"); // .how__content").classList.toggle("no-show");
  if (cards) {
    cards.forEach((card) =>
      card.addEventListener("click", function () {
        card.querySelector(".how__content").classList.toggle("no-show");
      })
    );
  }
};
