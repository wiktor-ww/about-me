function Footer() {
    const html = document.querySelector("#app") as HTMLDivElement;

    html.innerHTML += `
    <footer class="flex justify-center text-white/50 top-2000">
        <div class="text">
            <p> © 2026 wiktor </p>
        </div>
    </footer>
    `
}

export default Footer;
