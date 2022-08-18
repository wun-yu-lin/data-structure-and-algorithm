//sliding window max and min sum

maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); //12
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); //-28

// function maxSum(arr, n) {
//   let results = 0;
//   let left = 0;
//   let right = 0 + n - 1;
//   let arrlength = arr.length - 1;
//   if (n > arrlength) return null;
//   while (right <= arrlength) {
//     let sum = 0;
//     for (let i = left; i <= right; i++) {
//       sum = sum + arr[i];
//     }
//     if (sum > results) {
//       results = sum;
//     }
//     left++;
//     right++;
//   }
//   console.log(results);
//   return results;
// }

// function minSum(arr, n) {
//   let results = 0;
//   let left = 0;
//   let right = 0 + n - 1;
//   let arrlength = arr.length - 1;
//   if (n > arrlength) return null;
//   while (right <= arrlength) {
//     let sum = 0;
//     for (let i = left; i <= right; i++) {
//       sum = sum + arr[i];
//     }
//     if (sum < results) {
//       results = sum;
//     }
//     left++;
//     right++;
//   }
//   console.log(results);
//   return results;
// }

//advance
function maxSum(arr, n) {
  let arrlength = arr.length;
  if (n > arrlength) return null;

  let sum = 0;
  //step 1 sum
  for (let i = 0; i <= n; i++) {
    sum = sum + arr[i];
  }
  let results = sum;
  let tempValue = sum;
  for (let i = n; i < arrlength; i++) {
    tempValue = tempValue + arr[i] - arr[i - n];
    if (tempValue > results) {
      results = tempValue;
    }
  }
  console.log(results);
  return results;
}

function minSum(arr, n) {
  let arrlength = arr.length;
  if (n > arrlength) return null;

  let sum = 0;
  //step 1 sum
  for (let i = 0; i <= n; i++) {
    sum = sum + arr[i];
  }
  let results = sum;
  let tempValue = sum;
  for (let i = n; i < arrlength; i++) {
    tempValue = tempValue + arr[i] - arr[i - n];
    if (tempValue < results) {
      results = tempValue;
    }
  }
  console.log(results);
  return results;
}

//practice minSubarray

// function minSubLength(arr, n) {
//   let start = 0; //pointer
//   let end = 0; //pointer
//   let arrlength = arr.length;
//   let minLength = Infinity;
//   let total = 0;

//   if (!arr) return null;
//   while (start < arrlength) {
//     if (total < n && end < arrlength) {
//       total += arr[end];
//       end++;
//       console.log("pointer" + total, start, end);
//     } else if (total >= n) {
//       let curlength = end - start;
//       console.log(curlength);
//       console.log(start, end);
//       if (minLength > curlength) {
//         minLength = curlength;
//         console.log("pointer" + total, start, end);
//       }
//       total -= arr[start];
//       start++;
//     } else if (end >= arrlength) {
//       break;
//     }
//     console.log("test" + total);
//   }
//   if (minLength === Infinity) {
//     console.log("can not find minSubLength");
//     return -1;
//   }
//   console.log(minLength);
//   return minLength;
// }

minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11); //2
minSubLength([2, 3, 1, 2, 4, 3], 7); //2
function minSubLength(arr, n) {
  let start = 0; //pointer
  let end = 0; //pointer
  let arrlength = arr.length;
  let minLength = Infinity;
  let total = 0;

  if (!arr) return null;
  while (start < arrlength) {
    if (end == 0 && total < n) {
      total = total + arr[end];
      end++;
    } else if (end < arrlength && total < n) {
      total = total + arr[end];
      end++;
    } else if (total >= n) {
      let curlength = end - start;
      if (minLength > curlength) {
        minLength = curlength;
      }
      total = total - arr[start];
      start++;
    } else if (end >= arrlength) {
      break;
    }
  }
  if (minLength == Infinity) {
    console.log("can not find minSubLength");
    return -1;
  }
  console.log(minLength);
  return minLength;
}
