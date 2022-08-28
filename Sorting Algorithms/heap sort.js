let heapSize;
let arr = [15, 3, 17, 18.2, 2, 1, 666];
console.log(heapSort(arr));

function heapSort(arr) {
  buildMaxHeap(arr);
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = arr[0];
    arr[0] = temp;
    heapSize--;
    maxHeapify(0);
  }
  return arr;

  function buildMaxHeap(arr) {
    heapSize = arr.length - 1;
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
      maxHeapify(i);
    }
  }

  function maxHeapify(i) {
    let largest;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if (l <= heapSize && arr[l] > arr[i]) {
      largest = l;
    } else {
      largest = i;
    }

    if (r <= heapSize && arr[r] > arr[largest]) {
      largest = r;
    }
    if (largest != i) {
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
      maxHeapify(largest);
    }
  }
}
