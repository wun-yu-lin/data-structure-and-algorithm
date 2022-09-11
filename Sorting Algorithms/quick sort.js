let arr = [15, 3, 17, -17, 3.1415, 18, 20, 2, 1, 666];
quicksortArr(arr);

function quicksortArr(arr) {
  let p = 0;
  let r = arr.length - 1;
  quicksort(p, r);
  console.log(arr);
  return arr;
  function partition(p, r) {
    x = arr[r];
    i = p - 1;
    for (let j = p; j < r; j++) {
      if (arr[j] <= x) {
        i++;
        //swap arr[i] & arr[j]
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    //swap arr[i+1] & arr[r] //swap pivot and geater element
    let temp = arr[i + 1];
    arr[i + 1] = arr[r];
    arr[r] = temp;
    return i + 1;
  }

  function quicksort(p, r) {
    if (p < r) {
      q = partition(p, r);
      quicksort(p, q - 1);
      quicksort(p + 1, r);
    }
  }
}
