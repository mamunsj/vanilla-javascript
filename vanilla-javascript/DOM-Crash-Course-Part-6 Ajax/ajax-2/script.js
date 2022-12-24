document.getElementById("btn1").addEventListener("click", loadText);
document.getElementById("btn2").addEventListener("click", loadTexts);

function loadText() {
  // create XHR obj
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "user.json", true);
  xhr.onload = function () {
    if (this.status == 200) {
      var user = JSON.parse(this.responseText);
      var output = `<ul>
        <li> ${user.id} </li>
        <li> ${user.name} </li>
        <li> ${user.email} </li>
      </ul>`;
      document.getElementById("user").innerHTML = output;
    }
  };
  xhr.send();
}

function loadTexts() {
  // create XHR obj
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);
  xhr.onload = function () {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);
      let output = '';
      for (i in users) {
        console.log(users[i]);
        output += `<ul>
        <li> ${users[i].id} </li>
        <li> ${users[i].name} </li>
        <li> ${users[i].email} </li>
      </ul>`;
      document.getElementById('users').innerHTML = output
      }
    }
  };
  xhr.send();
}
