import Nav from "../../global/Nav";

function App(path: string): string {
    return /* html */ `
      ${Nav(path)}
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto">
              <div class="projects pt-10">
                  <div class="mb-4 flex items-center">
                      <p class="text-lg font-bold">projects</p>
                      <div class="ml-3 h-px flex-grow bg-white/50"></div>
                  </div>

                  <div class="content">
                      <p>List of all projects <i class="text-white/50">(including private ones)</i></p>
                      <br />
                      <br />
                      <ul style="list-style-type:disc;" class="gap-[10px] flex flex-col">
                          <li>
                              <a href="https://github.com/wiktor-ww/learn-webdev">Web Dev</a> — Example website I wrote while I was learning how to use Intersection
                              Observer. It doesn't contain much, but it uses SCSS instead of TAILWINDCSS which appears in most of my projects
                          </li>
                          <li>
                              <a href="https://github.com/wiktor-ww/about-me">About Me</a> — My portfolio (sort of) that shows my active projects (ongoing/done) and other
                              silly stuff.
                          </li>
                          <li>
                              <a href="https://github.com/wiktor-ww/geography">Energy website</a> — Informational website diving into Polish energetic infrastructure.
                              In this project I aimed for soft UI and more readability with use of pastel colors instead of big contrast.
                              <span class="text-red-200">(Privated)</span>
                          </li>
                          <li>
                              <a href="https://github.com/wiktor-ww/mag-system">Todo</a> — Simple ToDo list which uses localstorage and arrays to read and save added
                              or deleted tasks.
                              <span class="text-red-200">(Privated)</span>
                          </li>
                          <li>
                              <a href="https://github.com/wiktor-ww/wiktor-bio">Wiktor-bio</a> — Simple bio website i wrote using only JavaScript. It was my first-time experimenting
                              with JS-generated websites. It's archived but you can still read it!!!
                              <span class="text-orange-200">(Archived)</span>
                          </li>
                      </ul>
                      <br />

                      <div class="mb-4 py-10 flex items-center">
                          <div class="h-px flex-grow bg-white/50"></div>
                      </div>

                  </div>
              </div>
          </div>
      </div>
  `;
}

export default App;
