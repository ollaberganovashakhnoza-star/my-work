// function salomDe(ism) {
//     console.log("salom " + ism);
    
// }

// salomDe("shahnoza");
// salomDe("aziza");

//return
// function addNumber(a, b, c) {
//     return a*a + b*b + c*c;
// }

// function calculated(a, b, c, d) {
//         let result = addNumber(a, b, c);
//     console.log(result * d);
// }

// calculated(2, 3, 4, 5) //145

// let password = prompt("parolmi kiriting: ")



// function checkPasswordStrength(password) {
//     let passwordLength =password.length

 
// if (passwordLength < 8) {
//    return "weak"
    
// } else if(passwordLength >= 8 && passwordLength <= 12) {
//     return "medium"
    
// }else if(passwordLength > 12) {
//     return "strong"
    
// }
// }

// let result = checkPasswordStrength(password);
// console.log(result);

// Function expression (anonim)
const add = function(a, b) {
  return a + b;
};

// Named function expression
const mul = function multiply(a, b) {
  return a * b;
};

// Arrow - block body
const sub = (a, b) => {
  return a - b;
};

// Arrow - concise body (implicit return)
const square = x => x * x;

// Hech argument bo'lmasa:
const sayHi = () => console.log("Hi");