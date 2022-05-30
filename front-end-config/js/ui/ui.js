import { toggleCards } from "./toggle-cards.js";
import { stickMenu } from "./sticky-menu.js";
import { openMenu } from "./open-menu.js";
import { closeMenu } from "./close-menu.js";
import { renderServices } from "./services.js";
import { desktopMenuLinks } from "./desktop-menu-links.js";
import { openServicesMobileMenu } from "./open-services-mobile-menu.js";
import renderServicesOnHome, {
  toggleTextOnService,
} from "./render-services.js";
import { openServicesDesktopMenu } from "./open-desktop-menu.js";
import dropDownService from "./dropdownServices.js";
import { globalClick } from "./globalClick.js";
import { hideAlert } from "./hide-alert.js";

export default function ui() {
  desktopMenuLinks();
  toggleCards();
  stickMenu();
  openMenu();
  closeMenu();
  openServicesMobileMenu();
  openServicesDesktopMenu();
  renderServicesOnHome();
  dropDownService();
  globalClick();
  hideAlert()
}
