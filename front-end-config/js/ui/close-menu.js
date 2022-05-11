
export function closeMenu() {
  const closeMenu = document.querySelector(".closemenu");
  if (closeMenu) {
    closeMenu.addEventListener("click", function () {
      // document.querySelector(".menu").classList.toggle("scale-in-ver-top");
      document.querySelector(".mobilemenu").style.display = "none";
    });
  }
}
