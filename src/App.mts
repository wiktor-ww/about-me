const { default: cyber } = await import("/icons/cyberrealmrefer.gif");
const { default: html } = await import("/icons/htmldream.gif");
const { default: textfile } = await import("/icons/textfile.gif");
const { default: loveHome } = await import("/icons/love-home.gif");

function App(): string {
  return /* html */ `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto">
              <div class="grid grid-cols-1 md:grid-cols-4 gap-[15vw] mt-20">
                <div class="flex flex-col items-start gap-20">
                    <p>
                        <span class="font-bold text-4xl">Wiktor</span>
                    </p>

                    <ul>
                        <li id="github"><a href="https://github.com/wiktor-ww" target="_blank"> Github </a></li>
                        <li id="Mimo"><a href="https://xf2dfx.mimo.run/" target="_blank"> Mimo.org</a></li>
                    </ul>
                </div>
                <div class="col-span-3 mt-6 sm:mt-0 mb-6 text-pretty">
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                </div>
              </div>

              <div class="icons grid grid-cols-[100px_1fr_1fr] select-none max-w-[250px]">
                <div class="col-span-1 grid">
                    <img src=${html} alt="i_dream_html" draggable="false" loading="lazy" />

                </div>

                <div class="col-span-2 grid">
                    <img src=${loveHome} alt="love_home" draggable="false" loading="lazy" />
                </div>
              </div>
          </div>
      </div>
  `;
}

export default App;
