const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove", (event)=> {
    // Create x, y position
    const xPos = event.offsetX;
    const yPos = event.offsetY;

    // Create spanEl
    const spanEl = document.createElement("span");

    // Create spanEl with style.css to append x,y position
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";

    // Random Size
    const size = Math.random() * 100;
    spanEl.style.width = size + "px"
    spanEl.style.height = size + "px"

    // Append spanEl in bodyEl
    bodyEl.appendChild(spanEl);

    // Remove spanEl
    setTimeout(() => {
        spanEl.remove()
    }, 3000);
})