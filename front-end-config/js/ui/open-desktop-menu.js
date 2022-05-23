let active = false;
export function openServicesDesktopMenu() {
  const servicesLink = document.querySelector(".h-desktop__link.services");

  if (servicesLink) {
    servicesLink.addEventListener("click", function () {
      console.log(1);
      active = !active;
      if (active) {
        servicesLink.innerHTML = "SERVICIOS &#9660;";
        document.querySelector(".desktop-services").style.display = "flex";
      } else {
        servicesLink.innerHTML = "SERVICIOS &#9658;";
        document.querySelector(".desktop-services").style.display = "none";
      }
    });
  }
}
