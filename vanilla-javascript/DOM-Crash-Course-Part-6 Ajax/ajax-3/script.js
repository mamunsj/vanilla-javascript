document.getElementById("button").addEventListener("click", loadUsers);

function loadUsers() {
  //  // create XHR obj
  //  let xhr = new XMLHttpRequest();
  //  xhr.open("GET", "", true);
  //  xhr.onload = function () {
  //    if (this.status == 200) {
  //      var user = JSON.parse(this.responseText);
  //      var output = `<ul>
  //       <li> ${user.id} </li>
  //       <li> ${user.name} </li>
  //       <li> ${user.email} </li>
  //     </ul>`;
  //      document.getElementById("user").innerHTML = output;
  //    }
  //  };
  //  xhr.send();

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      let output = "";
      for (var data in json) {
        output += `
          <div id="wrapper">
            <h3> ${json[data].title}</h3>
            <p> ${json[data].body}</p>
          </div>
          `;
      }

      document.getElementById("users").innerHTML = output;
      console.log(json);
    });

  fetch("text.txt")
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data);
    });
}

document.getElementById("addPost").addEventListener("submit", addPost);

function addPost(e) {
  e.preventDefault();
   let title = document.getElementById('title').value;
   let body = document.getElementById('body').value;
  // POST request using fetch()
  fetch("https://jsonplaceholder.typicode.com/posts", {
    // Adding method type
    method: "POST", // Adding body or contents to send
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 140,
    }), // Adding headers to the request
    headers: {
      "Accept": 'application/json, text/plain, */*',
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    // Converting to JSON
    .then((response) => response.json())
    // Displaying results to console
    .then((json) => console.log(json));
}
