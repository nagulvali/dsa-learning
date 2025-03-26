// Quick sort

function quickSort(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else if (arr[i] < pivot) {
      left.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Test cases
console.log(quickSort([7, 2, 4, 1, 5])); // Unsorted array → [1, 2, 4, 5, 7]
console.log(quickSort([1, 2, 3, 4, 5])); // Already sorted array → [1, 2, 3, 4, 5]
console.log(quickSort([5, 4, 3, 2, 1])); // Reverse sorted array → [1, 2, 3, 4, 5]
console.log(quickSort([3, 5, 2, 1, 4])); // Random order array → [1, 2, 3, 4, 5]
console.log(quickSort([1, 1, 1, 1, 1])); // All elements same → [1, 1, 1, 1, 1]
console.log(quickSort([2, 2, 1, 3, 3])); // Duplicates with mixed order → [1, 2, 2, 3, 3]
console.log(quickSort([])); // Empty array → []
console.log(quickSort([1])); // Single element array → [1]

// time complexity:
// worst case - O(n^2)
// Average case complexity - O(nlogn)
