const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8];

//binary serach arr = sorted array, n= target number
function binarySearch(arr, n) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let mid = Math.floor((max + min) * 0.5);
    if (n > arr[mid]) {
      min = mid + 1;
    } else if (n < arr[mid]) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch(sortedArr, 9));
