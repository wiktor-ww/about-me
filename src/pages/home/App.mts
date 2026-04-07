import Nav from "../../global/Nav";
import Footer from "../../global/Footer";
const { default: html } = await import("/icons/htmldream.gif");
const { default: loveHome } = await import("/icons/love-home.gif");

function App(path: string): string {
    return /* html */ `
      ${Nav(path)}
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto">
              <div class="grid grid-cols-1 gap-[5vh] mt-20">
                <div class="flex flex-col items-start gap-20">
                    <p class="font-bold text-4xl md:text-4xl" id="Wiktor">
                    </p>
                </div>
                <div class="col-span-3 mt-6 sm:mt-0 mb-6 text-pretty">
                    <p>
                        im a beginner web developer and im mostly interested in creating websites using only TS

                        <br />
                        <br />

                        i usually write code using TS but in the near future i want to learn C#
                    </p>
                </div>
              </div>

              <div class="projects">
                  <div class="mb-4 flex items-center">
                      <p class="text-lg font-bold">projects</p>
                      <div class="ml-3 h-px flex-grow bg-white/50"></div>
                  </div>

                  <div class="content">
                      <p>Most of my projects are on github, and most of them are private :/</p>
                      <br />
                      <br />
                      <ul style="list-style-type:disc;" class="gap-[10px] flex flex-col">
                          <li>
                              <a href="https://github.com/wiktor-ww/learn-webdev">Web Dev</a> — Example website I wrote while I was learning how to use Intersection
                              Observer. It doesn't contain much, but it uses SCSS instead of TAILWINDCSS which I use in most of my projects
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
                              <a href="https://github.com/wiktor-ww/mag-system">Todo</a> — Simple ToDo list that uses localStorage and arrays to read and save added
                              or deleted tasks.
                              <span class="text-red-200">(Privated)</span>
                          </li>
                      </ul>
                      <br />
                      <p>
                          You can read the rest <a href="/projects">here</a>
                      </p>

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
