let arr = [4, 2, 3, 6, 1, 5];

function insertionSorted(arr) {
  for (let j = 1; j < arr.length; j++) {
    let key = arr[j];
    i = j - 1;
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i]; //if 前一個element大於key, 將element往後移
      i--;
    }
    arr[i + 1] = key; //if 前一個element小於或等於key, 將上一次被移掉的element改成key來填補空缺
    console.log(arr);
  }
  console.log(arr);
  return arr;
}
insertionSorted(arr);
