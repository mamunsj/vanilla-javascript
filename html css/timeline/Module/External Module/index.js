
const button = document.querySelector("button");
const root = document.getElementById("root");
root.innerHTML = "Hello Ujjal";
button.addEventListener("click", function () {
  root.style.background = "wheat";
});


const randomFruits = require("random-fruits");
console.log(randomFruits.roll())
console.log(randomFruits.rollThree())




