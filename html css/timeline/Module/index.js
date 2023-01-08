

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

// get os first 
// const os = require('os')
// // console.log(os.userInfo())
// // console.log(os.hostname());

// console.log(os.totalmem());
// console.log(os.freemem());

// if you want jsut totalmem and freemem then write like
const {totalmem,machine,freemem} = require('os')
console.log(totalmem(), machine(),freemem())
console.log(__dirname)