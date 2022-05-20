export async function showSingleService() {
  const route = location.pathname.split("/");

  if (route[0] === "" && route[1] === "servicios") {
    console.log(data);
    const data = await fetch("/public/data/services.json");
    const dataAsJson = await data.json();
    const title = route[2].split("-").join(" ");
    const service = dataAsJson.find((s) => s.title === title);
    const pageContainer = document.querySelector(".service");

    if (service) {
      pageContainer.querySelector("h1").textContent =
        service.title.charAt(0).toUpperCase() + service.title.slice(1);

      pageContainer.querySelector(".description").textContent =
        service.description;

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
        slideCount++;
        if (slideCount >= service.slide.length) {
          slideCount = 0;
        }
      }, 3000);
      let ventajas = "";
      service.v.forEach((v) => {
        ventajas += `<li>${v}</li>`;
      });

      pageContainer.querySelector(".ventajas").innerHTML = ventajas;

      pageContainer.querySelector(".fab").textContent = service.fab;
      console.log(service.slide);
    }
  }
}
