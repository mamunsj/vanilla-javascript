let output = document.getElementById("output");
let cardBody = document.getElementById("cardBody");
output.style.display = "none";
let zipform = document.getElementById('zipform');
zipform.addEventListener("submit", formSubmit);
function formSubmit(e) {
  e.preventDefault();
  let zip = document.getElementById("formInput").value;

  fetch(`https://api.zippopotam.us/us/${zip}`)
    .then((response) => {
      if (response.status != 200) {
        if (zip === "" || zip == 0) {
          output.style.display = "none";
        } else {
          output.style.display = "block";
          cardBody.innerHTML = `<h2 class ="p-2 bg-info text-danger">zipcode not found
        please enter a valid zipcode</h2>
        `;
          throw Error(response.statusText);
        }
      } else {
        return response.json();
      }
    })
    .then((data) => {
      data.places.forEach((place) => {
        console.log(place);
        result = `<ul>
          <li><strong>City: </strong>${place["place name"]}</li>
          <li><strong>State: </strong>${place["state"]}</li>
          <li><strong>Longitude: </strong>${place["longitude"]}</li>
          <li><strong>Latitude: </strong>${place["latitude"]}</li>
          </ul>
          `;
      });
      cardBody.innerHTML = result;
      output.style.display = "block";
    })
    .catch((err) => console.log(err));
}
// document.getElementById("btn").addEventListener("click", showResult);
// function showResult(e) {
//   console.log("123");
// }


const body = document.querySelector('body');
document.querySelector('#main').addEventListener('click', doSomething);
function doSomething(e){
  if(e.target.className = 'close'){
    console.log('233333')
   output.style.display = "none";
  }
 output.style.display = "none";
}