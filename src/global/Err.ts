import Nav from "./Nav"

function Err(path: string) {
    return /* html */`
    ${Nav(path)}
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
            <div class="grid grid-cols-1 gap-[5vh] mt-20">
                <div class="box">
                    <div class="content">
                        <div class="title">
                            <h1 class="text-[25px] font-bold mb-10">Page not found</h1>
                        </div>
                        <div class="desc">
                            <p> you are either looking for a non-existing page, deleted post or you are just looking for hidden page. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    `
}

export default Err;
