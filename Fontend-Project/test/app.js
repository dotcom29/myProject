const containerEl = document.querySelector(".container");

const careers = ["YouTube", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;

let charecterIndex = 0;

function updateText() {
    charecterIndex++
    containerEl.innerHTML = 
    `<h1>I am ${careers[careerIndex].slice(0,1) === "I" ? "an" : "a"} 
    ${careers[careerIndex].slice(0,charecterIndex)}</h1>`;

    if (charecterIndex === careers[careerIndex].length){
        careerIndex++
        charecterIndex = 0
    }

    if (careerIndex === careers.length)
        careerIndex = 0

    setTimeout(updateText, 400)
}
updateText();