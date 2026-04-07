import "../global/fonts.css";
import "../global/style.css";


function Render(ren: string) {
    let page = document.querySelector<HTMLDivElement>("#app");
    page!.innerHTML = ren;
}

export default Render;
