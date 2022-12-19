let form = document.getElementById("addForm");
let items = document.getElementById("items");
let filter = document.getElementById("filter");

//form submit event
form.addEventListener("submit", addItem);

//delete event
items.addEventListener("click", removeItem);

//filter event
filter.addEventListener("keyup", filteredItem);

// Add items
function addItem(e) {
  let input = document.getElementById('item')
  let newItem = document.getElementById("item").value;
  e.preventDefault();
  // get item value
  // create new li element
  let li = document.createElement("li");
  // add class name to the li
  li.className = "list-group-item";
  // add textNode to the li
  li.appendChild(document.createTextNode(newItem));
  items.append(li);
  //create delete button
  let btn = document.createElement("button");
  // adding class to the button
  btn.className = "btn btn-danger btn-sm delete";
  // adding textNode
  btn.appendChild(document.createTextNode("x"));
  li.appendChild(btn);
  input.innerText = '';
}


function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure, You wanna delete the item?")) {
      let li = e.target.parentElement;
      items.removeChild(li);
    }
  }
}

function filteredItem(e) {
  let text = e.target.value.toLowerCase();
  // get lis
  let lis = items.querySelectorAll("li");
  lis.forEach((li) => {
    var itemName = li.firstChild.textContent;
    if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
      li.style.display = "block";
    } else {
      li.style.display = "none";
    }
  });
}
