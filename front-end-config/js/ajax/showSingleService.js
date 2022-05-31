export async function showSingleService() {
  const route = decodeURIComponent(location.pathname).split("/");

  if (route[0] === "" && route[1] === "servicios") {
    const data = await fetch("/public/data/services.json");
    const dataAsJson = await data.json();
    const title = route[2].split("-").join(" ");
    const service = dataAsJson.find((s) => s.title === title);
    const pageContainer = document.querySelector(".service");
    if (service && service.title != "autoconsumo") {
    document.querySelectorAll(".second-img-cont").forEach((x) => x.remove());
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
          copy == '' ?'' : "&copy;" + copy.charAt(0).toUpperCase() + copy.slice(1)
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
      if (pageContainer.querySelector(".fab")) {

        pageContainer.querySelector(".fab").textContent = service.fab;
      }

      if (!service.fab.trim().length > 0) {
        pageContainer.querySelector(".fab-title").remove();

        if (pageContainer.querySelector(".fab")) {

          pageContainer.querySelector(".fab").remove();
        }
      }
    } else if (service && service.title == "autoconsumo") {
      if (document.querySelector(".slide-holder")) {
        document.querySelector(".slide-holder").remove();

      }
      pageContainer.querySelector("h1").textContent = "Autoconsumo";

      let description = "";
      service.description.forEach((x) => (description += `<p>${x}</p>`));
      pageContainer.querySelector(".description").innerHTML = description;

      pageContainer.querySelector(".why .why__title").textContent +=
        "autoconsumo?";

      pageContainer.querySelector(".why .why__desc").textContent = service.why;

      pageContainer
        .querySelector(".main-image-container img")
        .setAttribute("src", "/public/images/" + service.main);

      pageContainer
        .querySelector(".second-img-cont img")
        .setAttribute("src", `/public/images/${service.second}`);

      let paraNegocio = "";
      service.paraNegocio.forEach(
        (x) =>
          (paraNegocio += `<div class="item"><img class="iconlist" src="/public/images/iconli.svg""> <p>${x}</p></div>`)
      );
      pageContainer.querySelector(".paraNegocio").innerHTML += paraNegocio;

      let paraVivienda = "";
      service.paraVivienda.forEach(
        (x) =>
          (paraVivienda += `<div class="item"><img class="iconlist" src="/public/images/iconli.svg""> <p>${x}</p></div>`)
      );
      pageContainer.querySelector(".paraVivienda").innerHTML += paraVivienda;
      pageContainer
        .querySelector(".second-img-cont .third")
        .setAttribute("src", `/public/images/${service.third}`);
    }
  }
}
