import "../global/fonts.css";

const { default: MouseHover } = await import("../utils/util.mts");

function Render(ren: string) {
    let page = document.querySelector<HTMLDivElement>("#app");
    page!.innerHTML = ren;
}

export default Render;
MouseHover();
