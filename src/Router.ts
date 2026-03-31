import Render from "./render/render.mts";
import App from "./pages/home/App.mts";
import typewriter from "./utils/typewriter.mts";

function Router() {
    let path = document.location.pathname;

    switch (path) {
        case "/":
        case "/home":
            Render(App());

            const el1 = document.getElementById("Wiktor");
            if (el1) {
              typewriter("Wiktor", el1, 320);
            }
            break;
        case "/blog":
            Render("2");
            break;
    }
};

export const navigate = (url: string) => {
    window.history.pushState({}, "", url);
    Router();
}

window.addEventListener("popstate", () => {
    Router();
})

window.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest("a");

    if (link && link.getAttribute("href")?.startsWith("/")) {
        e.preventDefault();
        const href = link.getAttribute("href")!;
        navigate(href);
    }
});

Router();
