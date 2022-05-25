import { fetchSocios, renderSocios } from "./fetchSocios";
import { showSingleService } from "./showSingleService";
import renderCities from "./spanish-cities";

export default function ajax() {
  showSingleService();
  renderSocios();
  renderCities();
}
