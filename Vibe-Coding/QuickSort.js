/**
 * Partitions an array around a pivot element
 * @param {number[]} array - The array to partition
 * @param {number} low - The starting index of the partition
 * @param {number} high - The ending index of the partition
 * @returns {number} The final partition index
 */
const partition = (array, low, high) => {
  // Select the last element as pivot
  const pivot = array[high];

  // Initialize pointer to track the boundary between smaller and larger elements
  let i = low - 1;

  // Iterate through array elements from low to high-1
  for (let j = low; j < high; j++) {
    // If current element is smaller than or equal to pivot
    if (array[j] <= pivot) {
      i++;
      // Swap array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Place pivot in its correct position
  [array[i + 1], array[high]] = [array[high], array[i + 1]];

  // Return the partition point
  return i + 1;
};

/**
 * Sorts an array in-place using the iterative QuickSort algorithm with a stack
 * @param {number[]} array - The array to sort (mutates the original array)
 * @returns {number[]} The same array, sorted in-place
 */
const quickSort = (array) => {
  // Handle edge case of empty or single-element arrays
  if (array.length <= 1) {
    return array;
  }

  // Create a stack to store subarray boundaries (low, high pairs)
  const stack = [];

  // Initialize with the full array bounds
  stack.push(0);
  stack.push(array.length - 1);

  // Process subarrays while stack is not empty
  while (stack.length > 0) {
    // Pop high and low indices from stack
    const high = stack.pop();
    const low = stack.pop();

    // Partition the current subarray and get the pivot position
    const pi = partition(array, low, high);

    // If there are elements to the left of pivot, push left subarray bounds
    if (low < pi - 1) {
      stack.push(low);
      stack.push(pi - 1);
    }

    // If there are elements to the right of pivot, push right subarray bounds
    if (pi + 1 < high) {
      stack.push(pi + 1);
      stack.push(high);
    }
  }

  return array;
};

// ============================================
// Example usage and tests
// ============================================

const testArray1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", testArray1);
quickSort(testArray1);
console.log("Sorted array (in-place):", testArray1);

const testArray2 = [5, 2, 8, 1, 9];
console.log("\nOriginal array:", testArray2);
quickSort(testArray2);
console.log("Sorted array (in-place):", testArray2);

const testArray3 = [3];
console.log("\nSingle element:", testArray3);
quickSort(testArray3);
console.log("After sort:", testArray3);

const testArray4 = [];
console.log("\nEmpty array:", testArray4);
quickSort(testArray4);
console.log("After sort:", testArray4);

const testArray5 = [5, 5, 5, 5];
console.log("Duplicate elements:", testArray5);
quickSort(testArray5);
console.log("After sort:", testArray5);

const testArray6 = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("\nRandom array:", testArray6);
quickSort(testArray6);
console.log("After sort:", testArray6);
