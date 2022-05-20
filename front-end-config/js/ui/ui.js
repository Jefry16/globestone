import { toggleCards } from "./toggle-cards.js";
import { stickMenu } from "./sticky-menu.js";
import { openMenu } from "./open-menu.js";
import { closeMenu } from "./close-menu.js";
import { renderServices } from "./services.js";
import { desktopMenuLinks } from "./desktop-menu-links.js";
import { openServicesMobileMenu } from "./open-services-mobile-menu.js";
import renderServicesOnHome from "./render-services.js";

export default function ui() {
  desktopMenuLinks();
  toggleCards();
  stickMenu();
  openMenu();
  closeMenu();
  renderServices();
  openServicesMobileMenu();
  renderServicesOnHome();
}
