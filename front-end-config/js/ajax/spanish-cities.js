export default async function renderCities() {
  const data = await fetch("/public/data/spanish-cities.json");
  const dataJson = await data.json();

  let options = "<option value=''>-Provincia-</option>";
  dataJson.forEach((c) => {
    options += `<option value="${c.city}">${c.city}</option>`;
  });
  const provincesElements = document.getElementById("provinces");

  if(provincesElements){

    provincesElements.innerHTML = options;
  }
}
