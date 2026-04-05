import { marked } from "marked";
import md from "./md/post.md?raw";



const parsed = marked.parse(md)

function Aze(): string {
    return /* html */`
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
            <div class="projects pt-10">
                <div class="mb-4 flex items-center">
                    <p class="text-lg font-bold">Rewrite of my homepage</p>
                    <div class="ml-3 h-px flex-grow bg-white/50 mr-3"></div>
                    <p class="text-lg font-bold"><a href="/blog">Return</a></p>
                </div>

                <div class="content">
                    <div class="flex flex-col">
                        <article>
                            ${parsed}
                        </article>
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

export default Aze;
