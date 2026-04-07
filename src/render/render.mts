import "../global/fonts.css";
import "../global/style.css";
import hljs from 'highlight.js';


function Render(ren: string) {
    let page = document.querySelector<HTMLDivElement>("#app");
    page!.innerHTML = ren;
    const blocks = page!.querySelectorAll('pre code');
        blocks.forEach((block) => {
        // @ts-ignore
        hljs.highlightElement(block);
    });
}

export default Render;
