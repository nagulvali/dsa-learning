// give an integer "n", find the factorial of that integer
// In mathematics, the factorial of a non-negative integer "n", denoted n!, is the product of all positive integers less than or equal to "n"
// factorial of zero is 1
// factorial(4) = 4*3*2*1 = 24

function factorial(n) {
  if (n === 0) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));

// Time and space complexity
// Time: O(n)
// space: O(1)
