import { renderServices } from "./services";

export default function renderServicesOnHome() {
  renderServices().then((data) => {
    const container = document.querySelector(".home .list");
    if (container) {
      let content = "";
      data.forEach((s) => {
        content += `
        <a class="link" href=/servicios/${s.title
          .split(" ")
          .join("-")}><div class="list__item">
        <h2 class="list__item-title">${s.title.toUpperCase()}</h2>
        <img class="list__item-img" src="/public/images/${s.main}" alt="${
          s.title
        }">
      </div></a>
        `;
      });
      container.innerHTML = content;
    }
  });
}
