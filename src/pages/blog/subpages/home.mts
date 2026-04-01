function Home(): string {
    return /* html */`
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
            <div class="projects pt-10">
                <div class="mb-4 flex items-center">
                    <h2 class="text-lg font-bold">blog</h2>
                    <div class="ml-3 h-px flex-grow bg-white/50"></div>
                </div>

                <div class="content">
                    <p>List of all silly blogs i wrote <i class="text-white/50">(they contain info about my projects)</i></p>
                    <br />
                    <br />
                    <div class="flex flex-col">
                        <div class="boxes-static">


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
