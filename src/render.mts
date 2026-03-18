import App from "./App.mts";
import "./style.css";

const { default: Tippy } = await import("./tippy.mts");

function Render() {
  let page = document.querySelector<HTMLDivElement>("#app");
  let app = App();

  page!.innerHTML = app;
}

Render();
Tippy();
