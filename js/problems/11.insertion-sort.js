// Insertion sort
// given the elements of an array, sort them in ascending order
// Solution: virtually split an array into sorted and unsorted part

// Example: arr = [5, 3, 4, 1, 2]
// 	1.	Initial array: [5, 3, 4, 1, 2]
// 	2.	Step 1: Compare 3 with 5 → Insert 3 before 5 → [3, 5, 4, 1, 2]
// 	3.	Step 2: Compare 4 with 5 → Insert 4 before 5 → [3, 4, 5, 1, 2]
// 	4.	Step 3: Compare 1 with 5, 4, 3 → Insert 1 before 3 → [1, 3, 4, 5, 2]
// 	5.	Step 4: Compare 2 with 5, 4, 3, 1 → Insert 2 after 1 → [1, 2, 3, 4, 5]
// 	6.	Final sorted array: [1, 2, 3, 4, 5]

function insertionSort(arr) {
  // loop through each element
  for (let i = 1; i < arr.length; i++) {
    // consider index number i as current
    let current = arr[i];
    // previous element as j
    let j = i - 1;

    // compare curernt with all the sorted elements and shift right side
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // place the current elemetn where it fits
    arr[j + 1] = current;
  }
  return arr;
}

// Test cases
console.log(insertionSort([7, 2, 4, 1, 5])); // Unsorted array → [1, 2, 4, 5, 7]
console.log(insertionSort([1, 2, 3, 4, 5])); // Already sorted array → [1, 2, 3, 4, 5]
console.log(insertionSort([5, 4, 3, 2, 1])); // Reverse sorted array → [1, 2, 3, 4, 5]
console.log(insertionSort([3, 5, 2, 1, 4, -3, -4, -1])); // Random order array → [1, 2, 3, 4, 5]
console.log(insertionSort([1, 1, 1, 1, 1, -1, -2, -3])); // All elements same → [1, 1, 1, 1, 1]
console.log(insertionSort([2, 2, 1, 3, 3])); // Duplicates with mixed order → [1, 2, 2, 3, 3]
console.log(insertionSort([])); // Empty array → []
console.log(insertionSort([1])); // Single element array → [1]

// Time complexity
// as it is nested loops
// Big-O is O(n^2)
