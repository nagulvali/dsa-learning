// Give a positive integer "n", determine if the number is a power of 2 or not
// an integer is a power of two if there exists an integer "x" such that "n" === 2**x
// isPowerOfTwo(1) = true (2**0)
// isPowerOfTwo(2) = true (2**1)
// isPowerOfTwo(5) = false

// power of 2 or not means, check if a given number can be devided into factors of 2
// 16 = 2*2*2*2 = 2**4 => 16 can be factored into 4 multiples of 2, means it is power of 2
// 10 = 2*2*2*[?] => 10 is not power of 2 because, it can not be written in multiple factors of 2

// there are multiple ways we can solve this in protramming
// division method
// devide the number with 2 untill you get 1 as last, if you get 1 last it is power of 2 number

function isPowerOfTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log("0: " + isPowerOfTwo(0));
console.log("1: " + isPowerOfTwo(1));
console.log("2: " + isPowerOfTwo(2));
console.log("3: " + isPowerOfTwo(3));
console.log("4: " + isPowerOfTwo(4));
console.log("5: " + isPowerOfTwo(5));

// Big O
// Time complexity: O(logn)
// Space complexity: O(1)

// However above problem can also be solved with constant time complexity
// the power of 2 number and its previous number bitwise and operation will always return 0

function isPowerOfTwoBitwise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

// big-O
// time and space complexity both o(1)
