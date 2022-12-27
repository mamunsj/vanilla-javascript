document.getElementById("myForm").addEventListener("submit", function (e) {
  console.log("submited");
  
  let siteName = document.getElementById("siteName").value;
  let siteURL = document.getElementById("siteURL").value;
  console.log(siteName, siteURL);
  
  
  if(!validateForm(siteName, siteURL)){
    return false;
  }
  
  
  var bookmark = {
    name: siteName,
    url: siteURL,
  };

  // Local storage only store strings
  // console.log(bookmark + "original obj")
  // localStorage.setItem('test', "bookmark")
  // console.log(localStorage.getItem('test'))
  // localStorage.removeItem('test');
  // console.log(localStorage.getItem('test'))
  
  if (localStorage.getItem("bookmarks") === null) {
    // initialise an array
    var bookmarks = [];
    // add to array
    bookmarks.push(bookmark);
    // set to LocalStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
  
  e.preventDefault();
  document.getElementById('myForm').reset();
  fetchBookmarks();
  
});


function deleteBookMark(url) {
  // get bookmarks from localStorage 
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  // Loop through bookmarks
   for(var i= 0; i< bookmarks.length; i++){
    if(bookmarks[i].url == url){
      bookmarks.splice(i, 1)
    }
   }
   localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
   fetchBookmarks();
}


function fetchBookmarks() {
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  let bookMarkResult = document.getElementById("siteResult");
  bookMarkResult.innerHTML = "";
  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookMarkResult.innerHTML += ` <div class = " bg-secondary p-3 rounded m-3">
    <h3> ${name} </h3>
     <a class= " btn btn-default btn-primary mr-5" target="_blank" href="${url}"> Visit site</a>
     <a onclick="deleteBookMark('${url}')" class= " btn btn-danger mx-5 " href="#"> Delete</a>
    </div> `;
  }
}

function validateForm(siteName, siteURL){
    var expression =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteURL.match(regex)) {
      alert("Please provide authentic url ");
      return false;
    } 
    return true;
}