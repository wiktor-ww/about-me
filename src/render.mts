import App from "./App.mts";
import "./style.css";

const { default: MouseHover } = await import("./util.mts");

function Render() {
    let page = document.querySelector<HTMLDivElement>("#app");
    let app = App();

    page!.innerHTML = app;
}

Render();
MouseHover();
