

const fs = require('fs');

// fs.appendFile('module-one', '  beautiful features ', (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('Success')
//     }
// })

// fs.writeFile('module.html','hex',(err)=>{
//      if (err) {
//        console.log(err);
//      } else {
//        console.log("written");
//      }
// })


// fs.readFile('module-one', 'utf-8', (err, data)=>{
//      if (err) {
//        console.log(err);
//      } else {
//        console.log(data);
//      }
// })

// fs.rename("first-module-file", "myFirstModule", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("success");
//   }
// });

// fs.unlink('hello.css', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("deleted");
//   }
// });

fs.exists("index.js", (res) => {
  if(res) {
    console.log('Found');
  } else {
    console.log("not found");
  }
});