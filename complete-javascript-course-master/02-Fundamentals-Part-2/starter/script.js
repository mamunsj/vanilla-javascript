// Activating Strict Code
"use strict";

let data = "Ujjal is making some changes";

console.log(data);

// function

function sayHello() {
  console.log("Hello World");
}

//calling/ running /invoking function, we can think of them as like excuting or using function that we defined previously
sayHello();

function FoodMaker(Kacchi, Biriyani, Tehari) {
  const servedMeal = `Gime me a plate of ${Kacchi} Kacchi, two plate of ${Biriyani} Biriyani and four plate of ${Tehari} Tehari`;
  return servedMeal;
}

console.log(FoodMaker("Mutton", "Chicken", "Beef"));
console.log(FoodMaker("5pcs Beef", " 1 Full Chicken", "Beef whole leg piece"));

const meal = FoodMaker("Beef", "Mutton", "Beef");
console.log(meal);
