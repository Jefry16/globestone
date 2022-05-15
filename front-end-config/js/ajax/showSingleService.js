export async function showSingleService() {
  const route = location.pathname.split("/");

  if (route[0] === "" && route[1] === "servicios") {
    const data = await fetch("/public/js/servicios.json");
    const dataAsJson = await data.json();
    const title = route[2].split("-").join(" ");
    const service = dataAsJson.find((s) => s.title === title);
    const pageContainer = document.querySelector(".service");

    if (service) {
      pageContainer.querySelector(".title").textContent =
        service.title.charAt(0).toUpperCase() + service.title.slice(1);

      pageContainer.querySelector(".description").textContent =
        service.description;

      pageContainer
        .querySelector(".main-image-container img")
        .setAttribute("src", "/public/images/" + service.main + ".png");

      pageContainer.querySelector(".why .why__title").textContent +=
        service.title + "?";

      pageContainer.querySelector(".why .why__desc").textContent = service.why;

      pageContainer
        .querySelector(".slide img")
        .setAttribute("src", "/public/images/" + service.slide[0].i);
      let ventajas = "";
      service.v.forEach((v) => {
        ventajas += `<li>${v}</li>`;
      });

      pageContainer.querySelector(".ventajas").innerHTML = ventajas;

      pageContainer.querySelector(".fab").textContent = service.fab;
    }
  }
}
