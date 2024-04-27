// Count the number of digits in a positive integer using a loop.

// using while loop
let num = 12345;
let count = 0;

while (num > 0) {
  num = Math.floor(num / 10);
  count++;
}
console.log("Number of digits:", count); 

// using for loop
let num1 = 12345;
let num1String = num1.toString();
let count1 = 0;

for (let i = 0; i < num1String.length; i++) {
    if ( parseInt(num1String[i]) ) {
        count1++;
    }
}
console.log("Number of digits:", count);
