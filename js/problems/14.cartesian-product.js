// input:
// A = [1, 2]
// B = ['x', 'y']

// output
// [(1, 'x'), (1, 'y'), (2, 'x'), (2, 'y')]

function cartesianProduct(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}

console.log(cartesianProduct([1, 2], ["x", "y", "z"]));

// Time complexity
// nexted loop with different array sizes
// Big-O: O(mn)
