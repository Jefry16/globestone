import { fetchSocios, renderSocios } from "./fetchSocios";
import { showSingleService } from "./showSingleService";

export default function ajax() {
  showSingleService();
  renderSocios();
}
