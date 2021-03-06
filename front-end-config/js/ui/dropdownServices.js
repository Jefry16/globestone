import { renderServices } from "./services";

function formatTitle(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export default function dropDownService() {
  const container = document.querySelector(".s__select");
  if (container) {

    renderServices().then((services) => {

      let items =
        "<div id='opener'>Servicios <span class='green-caret'>►</span></div>";
      services.forEach(
        (s) =>
        (items += `<div class="s__select-item"><a href='/servicios/${s.url
          }'>${formatTitle(s.title)}</a></div>`)
      );
      container.innerHTML = items;

      document.querySelector("#opener").addEventListener("click", () => {
        document.querySelectorAll(".s__select-item").forEach((x) => {
          console.log(x.style.display);
          if (x.style.display == "" || x.style.display == "none") {
            x.style.display = "block";
            document.querySelector("#opener").innerHTML =
              "Servicios <span class='green-caret'>▼</span>";
          } else {
            x.style.display = "none";
            document.querySelector("#opener").innerHTML =
              "Servicios <span class='green-caret'>►</span></div>";
          }
        });
      });
    });
  }
}
