export function desktopMenuLinks() {
  const links = document.querySelectorAll(".h-desktop__links .h-desktop__link");

  if (links.length > 0) {
    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (href.includes(location.pathname) && location.pathname !== "/") {
        link.classList.add("activeLink");
      }
    });
  }
}
