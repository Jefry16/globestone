export function openMenu() {
  const menuBtn = document.querySelector(".header__menu-container");

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      const menu = document.querySelector(".mobilemenu");
      menu.style.display = "block";
    });
  }
}
