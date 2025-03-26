function recursiveFib(n) {
  if (n < 2) return n;
  return recursiveFib(n - 1) + recursiveFib(n - 2);
}

console.log(recursiveFib(0));
console.log(recursiveFib(1));
console.log(recursiveFib(2));
console.log(recursiveFib(3));
console.log(recursiveFib(4));
console.log(recursiveFib(5));

// Time and space complexity
// iterative approach = O(n)
// recursive approach = o(2^n)
