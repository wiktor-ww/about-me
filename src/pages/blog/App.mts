import Nav from "../../global/Nav";
import Home from "./subpages/home.mts";
import Aze from "./subpages/aze.mts";

function App(path: string, id: string): string {
    let pageContent = "";

    if (path) { pageContent = Home(); }
      switch (id) {
          case "13f":
              pageContent = Aze();
              break;
          case "14f":
              pageContent = "test";
              break;
      }

    console.log("currently watching blog: \n\n" + id);
    return /* html */ `
      ${Nav(path)}
      <div id="blogPages">
        ${pageContent}
      </div>
  `;
}

export default App;
