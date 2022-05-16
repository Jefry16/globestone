export async function renderServices() {
  const container = document.querySelector(".home .list");

  if (container) {
    const data = await fetch("/public/js/services.json");
    let content = "";
    for (const s of services) {
      content += `<div class="list__item"><h2>${s.name}</h2></div>`;
    }
    container.innerHTML = content;
  }
}
