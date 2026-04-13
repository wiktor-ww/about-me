import { Blogs } from './home_data/Data';

const blogs = Blogs.map(b => /* html */`
  <div class="box0 border-b p-2 border-white/50">
      <div class="text flex flex-col gap-2">
          <div class="title0 flex flex-row items-center justify-between">
            <a href=${b.path}>${b.title}</a> <p>${b.timestamp}</p>
          </div>
          <div class="desc0">
            ${b.desc}
          </div>
      </div>
  </div>
  `).join("");

function Home(): string {
    return /* html */`
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
            <div class="projects pt-10">
                <div class="mb-4 flex items-center justify-between">
                    <p class="text-lg font-bold">blog</p>
                    <div class="ml-3 mr-3 h-px flex-grow bg-white/50"></div>
                    <p> <a href="https://wiktor-b.vercel.app/home">read more</a> </p>
                </div>

                <div class="content">
                    <div class="flex flex-col">
                        <div class="boxes-static">
                            ${blogs}
                        </div>
                    </div>

                    <br />

                    <div class="mb-4 py-10 flex items-center">
                        <div class="h-px flex-grow bg-white/50"></div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    `
};

export default Home;
