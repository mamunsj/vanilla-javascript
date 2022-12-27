let search = document.getElementById("search");
let matchList = document.getElementById("match-list");

// One way >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

search.addEventListener("input", () => searchStates(search.value));
searchStates = async (searchText) => {
  const response = await fetch("text.json");
  const states = await response.json();

  // Get matches to current text input
  let matches = states.filter((state) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return state.name.match(regex) || state.abbr.match(regex);
  });
  if (searchText.length == 0) {
    matches = [];
    matchList.innerHTML = '';
  }
   

  // outputHtml(matches);
  matches.forEach((match) => {

    let output = ` <div class="card card-body mb-3 bg-dark ">
        <h4 class =""> ${match.name}  (${match.abbr}) <span class="text-primary"> ${match.capital} </span> </h4>
        <small> Lat: ${match.lat} / Long: ${match.long} </small>       </div>`;

    console.log(output);
    matchList.innerHTML += output;
  });
  console.log(matches);
};

  // another way >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// search.addEventListener('input', ()=>{
//    let val = search.value;
//    async function searchText(){
//     const response = await fetch("text.json");
//     const states = await response.json();
//     // console.log(states)

//     let matches = states.filter(state => {
//       let regex = new RegExp(`^${val}`, 'gi');
//       return state.name.match(regex)||state.abbr.match(regex)
//     });

//     if(val.length == 0){
//       matches = [];
//       matchList.innerHTML = '';
//     }

//     matches.forEach(match => {
//       let output = `
//        <div class="card card-body mb-3 bg-dark ">
//           <h4 class =""> ${match.name}  (${match.abbr}) <span class="text-primary"> ${match.capital} </span> 
//           </h4>
//         <small class = "text-info"> Lat: ${match.lat} / Long: ${match.long} </small>       </div>`;
//           console.log(output);
//           matchList.innerHTML += output;
//     });
//    }
//    searchText()
// })
