import Render from "./render/render.mts";
import AppHome from "./pages/home/App.mts";
import AppBlog from "./pages/blog/App.mts";
import AppContact from "./pages/contact/App.mts";
import AppProjects from "./pages/projects/App.mts";
import Pgp from "./pages/contact/PGP.mts";
import typewriter from "./utils/typewriter.mts";
import Err from "./global/Err";

type BlogRoutes = "blog" | "post-1" |      "post-2";

function Router() {
    let path = document.location.pathname;
    let parts = path.split("/");
    let base = "/" + (parts[1] || "");
    let id = parts[2];



    switch (base) {
        case "/":
        case "/home":
            Render(AppHome(path));
            const el1 = document.getElementById("Wiktor");
            if (el1) {
                typewriter("wiktor.", el1, 320);
            }
            break;
        case "/blog":
            Render(AppBlog(path, id as BlogRoutes));
            break;
        case "/projects":
            Render(AppProjects(path));
            break;
        case "/contact":
            Render(AppContact(path));
            break;
        case "/index.html":
            Render("What are you looking for silly goose");
            break;
        case "/pgp":
            Render(Pgp());
            break;
        default:
            Render(Err(path));
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
