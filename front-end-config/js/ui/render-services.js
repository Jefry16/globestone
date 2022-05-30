import { renderServices } from "./services";

function formatTitle(title) {
  const titleArray = title.split(" ");
  if (titleArray.length < 3) {
    return titleArray.join("<br />").toUpperCase();
  }

  return title.toUpperCase();
}

export function toggleTextOnService() {
  document.querySelectorAll(".list__item").forEach((x) => {
    x.addEventListener("mouseenter", function () {
      x.querySelector(".list__item-title").style.color = "#FAE345";
    });

    x.addEventListener("mouseleave", function () {
      x.querySelector(".list__item-title").style.color = "#fff";
    });
  });
}
export default function renderServicesOnHome() {
  const container = document.querySelector(".home .list");

  if (container) {
    renderServices().then((data) => {
      let content = "";
      data.forEach((s) => {
        content += `
        <a class="link" href=/servicios/${s.title
          .split(" ")
          .join("-")}><div class="list__item">
          <p class="copy">${s.copy
            ? "&copy;" + s.copy.charAt(0).toUpperCase() + s.copy.slice(1)
            : ""
          }</p>
        <h2 class="list__item-title">${formatTitle(s.title)}</h2>
        <img class="list__item-img" src="/public/images/${s.main}" alt="${s.title
          }">
      </div></a>
        `;
      });
    container.innerHTML = content;
    toggleTextOnService();
  });
  }
}
