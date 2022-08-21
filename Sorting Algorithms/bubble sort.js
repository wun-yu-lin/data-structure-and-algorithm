let arr = [1, 2, 3, 4, 5, 6];
function bubbleSort(arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    let swapping = false;
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        //change element
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        swapping = true;
      }
    }
    if (swapping == false) {
      break;
    }
  }
  console.log(arr);
  return arr;
}

bubbleSort(arr);
