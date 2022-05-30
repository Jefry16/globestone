async function fetchSocios() {
  const data = await fetch("/public/data/socios.json");
  const dataJson = await data.json();
  return dataJson;
}

export function renderSocios() {
  const container = document.querySelector(".socios .socios__container");
  if (container) {
    fetchSocios().then((data) => {
      let str = "";

      data.forEach((d) => {
        str += `<div class="socio"><img src="/public/images/${d.logo}"><p>${d.desc}</p></div>`;
      });
      container.innerHTML = str;
    });
  }

}
