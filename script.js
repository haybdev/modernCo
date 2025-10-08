// let fruit = prompt("Fruit name")

// if (fruit === "banana"){
//     console.log("Banana is $5")
// } else if (fruit === "Apple"){
//     console.log("Apple is $8.50")
// } else if (fruit === "Orange"){
//     console.log("Orange is $2.50")
// } else {
//     console.log(`${fruit} is not available at the moment`)
// }

// for (let a = 1; a <= 4; a++) {
//   console.log(a);
// }

// let n = 1;
// while (n <= 5) {
//   console.log(n);
//   n++;
// }

// // let correctPassword = "Secret123";
// // let userPassword = "";
// // let attempt = 0;

// // while (userPassword !== correctPassword && attempt < 3) {
// //   userPassword = prompt("Enter your password");
// //   attempt++;
// //   console.log(`You have made ${attempt} attempts`);
// // }

// for(let i = 0; i < 5; i++){
//     if(i % 2 === 0){
//         continue;
//     }
//     console.log(i)
// }
// for(let j = 0; j < 5; j++){
//     if(j === 2){
//         break;
//     }
//     console.log(j)
// }

function calculator(operator, num1, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/" && num2 !== 0) {
    return num1 / num2;
  } else {
    return "Undefined";
  }
}

console.log(calculator("/", 20, 1));

// const logo = document.getElementsByClassName(".header_logo")
// logo.

function ageCalculator(name, currentYear, birthYear) {
  let age = currentYear - birthYear;
  if (age === 50) {
    return `Hey ${name}, Congratulations on your golden jubilee!`;
  } else {
    return `${name}, You're now ${age}!`;
  }
}

const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('header_nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('show');
})
