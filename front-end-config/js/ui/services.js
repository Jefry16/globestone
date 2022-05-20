export async function renderServices() {
  const data = await fetch("/public/data/services.json");
  const dataAsJson = await data.json();
  return dataAsJson;
}
