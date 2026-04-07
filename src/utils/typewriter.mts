function typeWriter(text: string, element: HTMLElement, speed = 50) {
    let i = 0;

    element.classList.add("border-r-20", "border-white");

    function typing() {
        if (i < text.length) {
            element.innerHTML += text[i];
            i++;
            setTimeout(typing, speed);


        } else {
            element.classList.remove("border-r-20", "border-white");
        }
    }

    typing();
}

export default typeWriter;
