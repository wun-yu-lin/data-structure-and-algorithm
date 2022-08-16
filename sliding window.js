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
