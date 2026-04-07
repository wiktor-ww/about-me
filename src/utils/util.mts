function MouseHover() {
    const tippies = document.querySelector("#github");

    tippies?.addEventListener("mouseenter", async () => {
        const { default: Tippy } = await import("./tippy.mts");
        Tippy();
    });
}

export default MouseHover;
