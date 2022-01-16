let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let random = document.getElementById("random");

css.textContent = "linear-gradient(to right, rgb(11, 193, 239), rgb(219, 0, 88));";

function setGradient () {
    body.style.background = "linear-gradient(to right," + " " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function randomNumber() {
    return Math.floor(Math.random()*266);
}



function randomColor() {
body.style.background = "linear-gradient(to right, " + "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + "),"
 +  "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")";
 css.textContent = body.style.background;
 random.style.background = body.style.background;
 

}

random.addEventListener("click", randomColor);

