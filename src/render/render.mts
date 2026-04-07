import "../global/fonts.css";
import "../global/style.css";


function Render(ren: string) {
    let page = document.querySelector<HTMLDivElement>("#app");
    page!.innerHTML = ren;

setTimeout(() => {
            // @ts-ignore
            if (typeof window.hljs !== 'undefined') {
                // @ts-ignore
                window.hljs.highlightAll();
            } else {
                console.log("hljs not ready");
            }
        }, 50);
}

export default Render;
