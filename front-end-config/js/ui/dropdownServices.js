import { renderServices } from "./services";

function formatTitle(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export default function dropDownService() {
  renderServices().then((services) => {
    const container = document.querySelector(".s__select");

    if (container) {
      let items = "<div id='opener'>Servicios ►</div>";
      services.forEach(
        (s) =>
          (items += `<div class="s__select-item">${formatTitle(s.title)}</div>`)
      );
      container.innerHTML = items;

      document.querySelector("#opener").addEventListener("click", () => {
        document.querySelectorAll(".s__select-item").forEach((x) => {
          console.log(x.style.display);
          if (x.style.display == "" || x.style.display == "none") {
            x.style.display = "block";
            document.querySelector("#opener").textContent = "Servicios ▼";
          } else {
            x.style.display = "none";
            document.querySelector("#opener").textContent = "Servicios ►";
          }
        });
      });
    }
  });
}
