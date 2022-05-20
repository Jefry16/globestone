import { renderServices } from "./services";

function formatTitle(title) {
  const titleArray = title.split(" ");
  if (titleArray.length < 3) {
    return titleArray.join("<br />").toUpperCase();
  }

  return title.toUpperCase();
}
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
        <h2 class="list__item-title">${formatTitle(s.title)}</h2>
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
