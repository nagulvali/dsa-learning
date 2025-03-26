// linear search

function linearSearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 10, -5, 2, 5, 7], 13));
console.log(linearSearch([1, 22, -5, -2, 55, 77], 55));
console.log(linearSearch([-1, -10, 3, 4, 5, 6], 6));

// Big-O: O(n)
