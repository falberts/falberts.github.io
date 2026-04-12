function initTypeWrite() {
    const element = document.getElementById("about-me-text");
    const text = element?.textContent.trim() || "";

    element.textContent = "";
    element.classList.remove("hidden");
    
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            element.append(text[i])
        }, i * 15)
    }
}
