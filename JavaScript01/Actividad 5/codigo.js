
const num1 = 10
const num2 = 20

console.log(num1 < num2)   // true
console.log(num1 > num2)   // false
console.log(num1 == num2)  // false
console.log(num1 != num2)  // true

let comp1 = num1 < num2
let comp2 = num1 == 10

console.log(comp1 && comp2)  // true

console.log(comp1 || num1 > num2)   // true

console.log(!comp1)  // false
