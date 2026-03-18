import tippy from "tippy.js";
import "tippy.js/dist/tippy.css"; // optional for styling

function Tippy() {
  tippy("#github", {
    content: "@wiktor-ww",
    interactive: true,
    inertia: true,
  });
}

export default Tippy;
