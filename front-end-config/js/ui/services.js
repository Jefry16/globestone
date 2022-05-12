export function renderServices() {
  const services = [
    { name: "PLACAS SOLARES", images: "" },
    { name: "SOLAR FLOTANTE", images: "" },
    { name: "AGRICULTURA FOTOVOLTAICA", images: "" },
    { name: "TEJAS SOLARES", images: "" },
    { name: "LAND SCOUTING", images: "" },
    { name: "MODULAR", images: "" },
    { name: "ALMACENAMIENTO INTELIGENTE", images: "" },
    { name: "PUNTOS RECARGA VEHÍCULOS", images: "" },
  ];

  const container = document.querySelector(".list");

  if (container) {
    let content = "";
    for (const s of services) {
      content += `<div class="list__item"><h2>${s.name}</h2></div>`;
    }
    container.innerHTML = content;
  }
}
