var titles = document.querySelectorAll(".title");
// for (var i = 0; i < titles.length; i++) {
//   titles[i].style.color = "#ccc";
// }

titles.forEach((title) => {
  title.style.color = "#aaaddd";
});

document.getElementById("main").style.background = "#f3fbf3";

document.getElementById("items").style.background = "wheat";
document.getElementById("items").style.padding = ".8rem";

var lis = document.querySelectorAll("li");
lis.forEach((li) => {
  li.style.background = "#ffee";
});

var lists = document.querySelectorAll(".list-group-item");
for (var i = 0; i < lists.length; i++) {
  lists[i].style.background = "#f3f3f3";
}

var oddlist = document.querySelectorAll(".list-group-item:nth-child(odd)");
oddlist.forEach((li) => {
  li.style.background = "navy-blue";
});

var evenlist = document.querySelectorAll(".list-group-item:nth-child(even)");
evenlist.forEach((list) => {
  list.style.background = "#f4f4";
});
