function recursiveBinarysearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;
  if (arr[leftIndex] === target) return leftIndex;
  if (arr[rightIndex] === target) return rightIndex;

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (arr[middleIndex] == target) return middleIndex;

  if (arr[middleIndex] < arr[rightIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

console.log(
  recursiveBinarysearch([-4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 13)
);
console.log(
  recursiveBinarysearch([-4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -2)
);
console.log(
  recursiveBinarysearch([-4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)
);

// as input size reduces by half
// Big-O is O(logn)
