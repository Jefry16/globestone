async function fetchSocios() {
  const data = await fetch("/public/data/socios.json");
  const dataJson = await data.json();
  return dataJson;
}
