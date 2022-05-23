export async function showSingleService() {
  const route = decodeURIComponent(location.pathname).split("/");

  if (route[0] === "" && route[1] === "servicios") {
    const data = await fetch("/public/data/services.json");
    const dataAsJson = await data.json();
    const title = route[2].split("-").join(" ");
    const service = dataAsJson.find((s) => s.title === title);
    const pageContainer = document.querySelector(".service");
    if (service) {
      pageContainer.querySelector("h1").textContent =
        service.title.charAt(0).toUpperCase() + service.title.slice(1);
      let description = "";

      service.description.forEach((x) => (description += `<p>${x}</p>`));
      pageContainer.querySelector(".description").innerHTML = description;

      pageContainer
        .querySelector(".main-image-container img")
        .setAttribute("src", "/public/images/" + service.main);

      pageContainer.querySelector(".why .why__title").textContent +=
        service.title + "?";

      pageContainer.querySelector(".why .why__desc").textContent = service.why;

      let slideCount = 1;
      setInterval(() => {
        pageContainer
          .querySelector(".slide img")
          .setAttribute("src", "/public/images/" + service.slide[slideCount].i);
        const copy = service.slide[slideCount].copy;
        pageContainer.querySelector(".slide p").innerHTML = ` ${
          "&copy;" + copy.charAt(0).toUpperCase() + copy.slice(1)
        }`;

        slideCount++;
        if (slideCount >= service.slide.length) {
          slideCount = 0;
        }
      }, 3000);
      let ventajas = "";
      service.v.forEach((v) => {
        ventajas += `<div class="item"><img class="iconlist" src="/public/images/iconli.svg""> <p>${v}</p></div>`;
      });

      pageContainer.querySelector(".ventajas").innerHTML = ventajas;
      pageContainer.querySelector(".fab").textContent = service.fab;

      if (!service.fab.trim().length > 0) {
        pageContainer.querySelector(".fab-title").remove();
        pageContainer.querySelector(".fab").remove();
      }
    }
  }
}
