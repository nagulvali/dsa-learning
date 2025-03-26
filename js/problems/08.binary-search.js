// binary search
// NOTE: binary index used only for sorted arrays

function binarySearch(arr, n) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  if (n === arr[leftIndex]) return leftIndex;
  if (n === arr[rightIndex]) return rightIndex;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === n) return middleIndex;
    if (n < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

// Big-O: O(logn)

console.log(binarySearch([-4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 13));
console.log(binarySearch([-4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -2));
console.log(binarySearch([-4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
