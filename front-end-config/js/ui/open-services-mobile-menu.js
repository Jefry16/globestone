let active = false;
export function openServicesMobileMenu() {
  const servicesLink = document.querySelector(".mobilemenu__link.services");

  if (servicesLink) {
    servicesLink.addEventListener("click", function () {
      active = !active;
      if (active) {
        servicesLink.innerHTML = "SERVICIOS &#9660;";
        document.querySelector(".mobile-services").style.display = "flex";
        servicesLink.style.borderBottom = "2px solid #FAE345";
      } else {
        servicesLink.innerHTML = "SERVICIOS &#9658;";
        document.querySelector(".mobile-services").style.display = "none";
        servicesLink.style.borderBottom = "none";
      }
    });
  }
}
