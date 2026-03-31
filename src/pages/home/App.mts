const { default: html } = await import("/icons/htmldream.gif");
const { default: loveHome } = await import("/icons/love-home.gif");
import './styles/style.css';

function App(): string {
    return /* html */ `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto">
              <div class="flex justify-center mt-5">
                  <p> link </p>

              </div>

              <div class="grid grid-cols-1 gap-[5vh] mt-20">
                <div class="flex flex-col items-start gap-20">
                    <p class="font-bold text-4xl md:text-6xl" id="Wiktor">
                    </p>
                </div>
                <div class="col-span-3 mt-6 sm:mt-0 mb-6 text-pretty">
                    <p> I'm a self-taught developer who loves building websites. I have advanced skills in HTML, CSS, and TailwindCSS.
                        My favorite way to work is using pure TypeScript and JavaScript to build and render entire sites.
                        <br /><br />
                        I also have basic experience with React. Programming is my main interest.
                    </p>
                </div>
              </div>

              <div class="mb-4 flex items-center">
                  <h2 class="text-lg font-bold">projects</h2>
                  <div class="ml-3 h-px flex-grow bg-white/50"></div>
              </div>
          </div>
      </div>
  `;
}

export default App;
