const path = require("path");
const fs = require("fs");

// fs.appendFile("module.html", "hex", (err) => {
//   if (err) throw err;
//   console.log("file is created");
// });

// fs.rename("module.html", "myFirstModule", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("success");
//   }
// });


// make directory 
fs.mkdir(
    path.join(__dirname, 'Test1'), {}, err =>{
        if(err) throw err
        console.log('folder is created')
    }
)




