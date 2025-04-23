/**
 * Binary Search Algorithm
 * Works only on sorted arrays
 * Returns the index of the target if found, otherwise -1
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Example usage:
const sortedNumbers = [1, 3, 5, 7, 9, 11, 13];
const target = 9;
const result = binarySearch(sortedNumbers, target);

if (result !== -1) {
  console.log(`Found ${target} at index ${result}`);
} else {
  console.log(`${target} not found in array`);
}
