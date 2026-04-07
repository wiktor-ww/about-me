import { Links } from "./links/Links"

function Nav(path: string): string {
    const links = Links.map(l => {
        const isActive = l.path === path;
        const activeClass = isActive ? "activel" : "";

        return `


        <p>
          <a href="${l.path}" class="${activeClass}">
            ${l.title}
          </a>
        </p>
        `
    }).join("");

    return /* html */`
    <div class="max-w-3xl mx-auto">
        <div class="flex justify-center mt-5 flex-row gap-5">
            ${links}
        </div>
    </div>

    `
};

export default Nav;
