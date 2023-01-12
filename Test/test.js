// var mac = {
//   company: "apple",
//   product: "iPhone",
//   price: 300,
// };

// for (var key in mac) {
//   if (mac[key] === "apple") {
//     console.log("Contains apple");
//   }
// }

// const howManyLetters = (letters) => {
//   let res = 0;
//   //   for (let i = 0; i < letters.length; i++) {
//   //     console.log(Number(i) + 1, i, letters.length);
//   //     res = Number(i) + 1;
//   //   }
//   //   return { Result: res };

//   // ******************This is better way*******************

//   for (letter in letters) {
//     console.log(Number(letter) + 1 );
//     res = Number(letter) + 1;
//   }
//   return { Result: res };
// };

// const letters = prompt('write something');
// console.log(howManyLetters(letters));

//**********************************************************//
// const numbers = [1,2,3,4];
// let res = 0;
// for( number in numbers){
//     res = res + Number(numbers[number])
// }
// console.log(res)

// Another way*******************************

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = 0;
for (number in numbers) {
  // console.log(Number(number) +1)
  res = res + Number(number) + 1;
  // console.log(number, {Res: res})
  console.log(`${number} + ${res} = ${res}`);
}
