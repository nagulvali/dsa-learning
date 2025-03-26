// Bubble sort:
// Given an array sort the elements

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// test cases

console.log(bubbleSort([1, 2, 3, 4, 5]));
console.log(bubbleSort([5, 4, 3, 2, 1]));
console.log(bubbleSort([3, 1, 4, 5, 2]));
console.log(bubbleSort([2, 2, 2, 2, 2]));
console.log(bubbleSort([-1, 3, -2, 5, 0]));

// Time Complexity Analysis:
// as this is nested loop, the time complexity is quadratic
// Big-O: O(n^2)
