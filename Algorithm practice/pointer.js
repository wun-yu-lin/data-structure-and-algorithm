//practice3  average pair //pointer

let arr5 = [-11, 0, 1, 2, 3, 9, 14, 17, 21];
function averagePairPointer(arr, avg) {
  //O(n) 複雜度相當低
  //設定指標
  let left = 0;
  let right = arr.length - 1;
  let results = [];
  while (right > left) {
    let temp_avg = (arr[left] + arr[right]) / 2;
    if (temp_avg > avg) {
      right--; //移動右邊的指標(向左)
    }
    if (temp_avg < avg) {
      left++; //移動左邊的指標(向右)
    }
    if (temp_avg == avg) {
      results.push([arr[left], arr[right]]);
      left++;
      right--;
    }
  }
  console.log(results);
  return results;
}

averagePairPointer(arr5, 1.5);

//practice2 palindrome 迴文 string
let str1 = "abbbbba";
function palindrome(str) {
  let left = 0;
  let right = str.length - 1;
  if (!str) return false;
  while (right > left) {
    if (str[left] != str[right]) return false;
    left++;
    right--;
  }
  return true;
}
console.log(palindrome(str1));
