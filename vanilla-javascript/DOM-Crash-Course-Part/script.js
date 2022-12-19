// var titles = document.querySelectorAll(".title");
// // for (var i = 0; i < titles.length; i++) {
// //   titles[i].style.color = "#ccc";
// // }

// titles.forEach((title) => {
//   title.style.color = "#aaaddd";
// });

// document.getElementById("main").style.background = "#f3fbf3";

// document.getElementById("items").style.background = "wheat";
// document.getElementById("items").style.padding = ".8rem";

// var lis = document.querySelectorAll("li");
// lis.forEach((li) => {
//   li.style.background = "#ffee";
// });

// var lists = document.querySelectorAll(".list-group-item");
// for (var i = 0; i < lists.length; i++) {
//   lists[i].style.background = "#f3f3f3";
// }

// var oddlist = document.querySelectorAll(".list-group-item:nth-child(odd)");
// oddlist.forEach((li) => {
//   li.style.background = "navy-blue";
// });

// var evenlist = document.querySelectorAll(".list-group-item:nth-child(even)");
// evenlist.forEach((list) => {
//   list.style.background = "#f4f4";
// });

// Dom crash course part two starts now >>>>>>>>>


var items = document.getElementById("items");
li = document.querySelector("li");
  // creatElement
  var newList = document.createElement("li");

  newList.style.fontSize = '25px'
  newList.style.fontWeight = '400'
  // Add a class to the element you created
  newList.className = "list-group-item";
  newList.id = "newAdded";
  newList.setAttribute("title", "newly added");

  // craeat textNode
  var textNode = document.createTextNode("Newly added list");
  newList.appendChild(textNode);
  items.insertBefore(newList, li)
//   items.append(newList);
  


// for (var i = 0; i < 5; i++) {

//   // creatElement
//   var newList = document.createElement("li");

//   // Add a class to the element you created
//   newList.className = "list-group-item";
//   newList.id = "newAdded";
//   newList.setAttribute("title", "newly added");

//   // craeat textNode
//   var textNode = document.createTextNode("Newly added list item");
//   newList.appendChild(textNode);
//   // items.insertBefore(newList, li)
//   items.append(newList);
// }

// let inputValue = document.querySelector('input[type="text"]')
// inputValue.addEventListener('keypress',
// (e)=>{
//     e.preventDefault();
//     console.log(e)
//     console.log(e.target.value)
//   console.log('Helllo Ujjal')  

//   var newList = document.createElement("li");
//   newList.className = "list-group-item";
//   newList.setAttribute("title", "newly added");

//   // craeat textNode
//   var textNode = e.target.value;
//   newList.append(textNode);
//   items.append(newList);

//   e.target.value= ''
// })

// let main = document.getElementById('main');

// main.addEventListener('mousemove', runFunction)

// function runFunction(e){
//     main.style.background ="rgb("+e.clientX+", "+e.clientY+",59)"
// }

let input =document.querySelector('input').value;
let form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault();

    // creatElement
    var newList = document.createElement("li");
    newList.className = "list-group-item";

    // craeat textNode
    var textNode = document.createTextNode(input);
    newList.appendChild(textNode);
    // items.insertBefore(newList, li)
    items.append(newList);
})
