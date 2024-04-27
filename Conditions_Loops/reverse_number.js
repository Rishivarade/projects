// Reverse the digits of a number (e.g., 12345 becomes 54321) using a loop.

let number = 12345;
let reversedNum = 0;

while (number > 0) {
  let digit = number % 10;
  reversedNum = reversedNum * 10 + digit;
  number = Math.floor(number / 10);
}
console.log("Reversed number:", reversedNum);

// OR

let number1 = 12345;
let number1String = number1.toString();
let number2 = "";

for (let i = number1String.length - 1; i >= 0; i--) {
  number2 += number1String[i];
}
console.log("Reversed number:", number2);