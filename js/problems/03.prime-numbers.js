// problem:
// Give a natural number "n", determine if the number is prime or not
// A prime number is a natural number greater than 1 that is not product of two smaller natural numbers
// In other words prime number should be divisable by two distinct numbers only (itself and one)
// as number 1 can only divisable by itself not any other number, so 1 is not a prime number

// isPrime(5) = true (1*5 or 5*1)
// isPrime(4) = false (1*4 or 2*2 or 4*1)

console.log("using simple loop till n:");
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));

// Space and time complexity
// time: O(n)
// space: O(1)

// Optimized primality test
// integers larger than suqare root do not neeed to be checked because,
// whenever n=a*b, one of the two factors "a" and "b" is less than or equal to the square root of "n".

// so we do not need to check all the numbers, we can only check till suare root of n

console.log("using sqrt:");

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));

// Time complexity
// Time: O(sqrt(n))
