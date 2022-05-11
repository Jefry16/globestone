export function makeSloganOneLine() {
  const br = document.querySelector(".one-line");
  if (br && window.matchMedia("(min-width: 720px)").matches) {
    br.remove();
  }
}
