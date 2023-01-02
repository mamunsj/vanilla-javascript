let input = document.getElementById("inputNum");
let fact = document.getElementById("fact");
let factText = document.getElementById("factText");

// input.addEventListener("input", getFactAjax);
input.addEventListener("input", getFetchAjax);

// function getFactAjax() {
//   let value = input.value;
//   console.log(value);

//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "http://numbersapi.com/" + value);
//   xhr.onload = function () {
//     if ((this.status == 200) & (value != "")) {
//       console.log(this.responseText);
//       fact.style.display = "block";
//       factText.innerHTML = this.responseText;
//     } else {
//       // fact.style.display = 'none'
//       factText.innerHTML = ` Please Provide <b class ="text-white">Any</b> Number`;
//       fact.style.color = "#000";
//     }
//   };
//   xhr.send();
// }

function getFetchAjax() {
  let value = input.value;
  fetch("http://numbersapi.com/" + value)
    .then((json) => json.text())
    .then((data) => {
      console.log(data);
      if (value != "") {
        console.log(data);
        fact.style.display = "block";
        factText.innerHTML = data;
      } else {
        // fact.style.display = 'none'
        factText.innerHTML = ` Please Provide <b class ="text-warning">Any</b> Number`;
          
      }
    })
    .catch((err) => console.log(err));
}
