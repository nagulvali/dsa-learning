// fibonacci number is the sum of previous two numbers, it starts with 0, 1
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

// using loops
function fibonacci(n) {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    let num = fib[i - 1] + fib[i - 2];

    // add condition if you want to get the fib numbers untill n only instead n numbers of fibs
    if (num < n) {
      fib.push(num);
    } else {
      break;
    }
  }

  return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(10));
console.log(fibonacci(55));
console.log(fibonacci(60));

// Time complexity O(n)
// space complexity O(1)
