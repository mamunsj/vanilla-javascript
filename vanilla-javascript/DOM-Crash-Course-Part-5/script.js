// document.getElementById("outputs").style.visibility = "hidden";
let h6 = document.getElementById('headerSix');
// h6.style.display = 'none'
document.getElementById("giveInput").addEventListener("input", function (e) {
  let inputValue = document.getElementById("giveInput").value;
  let pounds = e.target.value;

  console.log(inputValue);
  if (inputValue == "" || isNaN(inputValue)) {
    // console.log("There is nothing to show");
    document.getElementById("outputs").style.visibility = "hidden";
    h6.style.display = "block";
    h6.innerHTML = 'Write in Number ( ex: 0,1,2,3...) to get Your result.';
    

  } else {
    document.getElementById("outputs").style.visibility = "visible";
    document.getElementById("gramOutput").innerHTML = (pounds / 0.0022046).toFixed(2);
    document.getElementById("kgOutput").innerHTML = (pounds * 0.45359237).toFixed(2);
    document.getElementById("ozOutput").innerHTML = pounds * 16;
    h6.style.display = "none";
  }
});
