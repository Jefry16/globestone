import { hoverArrow } from "./hover-arrow-title.js";
import { toggleCards } from "./toggle-cards.js";
import { stickMenu } from "./sticky-menu.js";
import { openMenu } from "./open-menu.js";
import { closeMenu } from "./close-menu.js";
import { makeSloganOneLine } from "./make-slogan-one-line.js";

export default function ui() {
  hoverArrow();
  toggleCards();
  stickMenu();
  openMenu();
  closeMenu();
  makeSloganOneLine();
}
