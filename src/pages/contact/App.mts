import Nav from "../../global/Nav";

function App(path: string): string {
    return /* html */ `
      ${Nav(path)}
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <div class="max-w-3xl mx-auto">
              <div class="projects pt-10">
                  <div class="mb-4 flex items-center">
                      <p class="text-lg font-bold">Contact</p>
                      <div class="ml-3 h-px flex-grow bg-white/50"></div>
                  </div>

                  <div class="content flex flex-col">
                      <p class="mb-10">you can <a href="mailto:wiktorr@tuta.io">mail</a> me

                      <p class="text-[25px] font-bold mb-4"> other contacts </p>
                      <ul class="flex flex-col gap-2">
                          <li><a href="https://bsky.app/profile/wiktor-r.bsky.social">bsky</a></li>
                          <li><a href="https://github.com/wiktor-ww">github</a></li>


                      </ul>
                      <div class="mb-4 mt-10 flex items-center">
                          <div class="h-px flex-grow bg-white/50"></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `;
}

export default App;
