// Verify if a number is prime or not using a loop.

let c = 15;
let isPrime = true;

if (c <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(c); i++) {
    if (c % i === 0) {
      isPrime = false;
      break;
    }
  }
}
if (isPrime) {
  console.log(c + " is a prime number");
} else {
  console.log(c + " is not a prime number");
}