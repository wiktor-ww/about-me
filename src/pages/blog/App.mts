import Nav from "../../global/Nav";
import Home from "./subpages/home.mts";
import Aze from "./subpages/aze/aze.mts";
import Aze2 from "./subpages/aze2/aze.mts";

const azeList = {
    "blog": Home,
    "post-1": Aze,
    "post-2": Aze2,
}

function App(path: string, id: keyof typeof azeList): string {
    let pageContent = azeList[id]?.() || Home();


    console.log("currently watching blog: \n\n" + id);
    return /* html */ `
      ${Nav(path)}
      <div id="blogPages">
        ${pageContent}
      </div>
  `;
}

export default App;
