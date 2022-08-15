//counter practice1
//intersection two array
let arr1 = [1, 23, 4, 5, 234, 3, 43, 1234, 3, 343, 34];
let arr2 = [2, 3232, 3, 4, 6, 4, 5, 3, 343, 34];

//intersection交集 wiht counter
function intersection(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  let results = [];
  let counter = {};
  arr3length = arr3.length;
  for (let i = 0; i < arr3length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]]++;
    }
  }

  //loop around the counter obj
  for (let property in counter) {
    if (counter[property] > 1) {
      results.push(property);
    }
  }
  console.log(results);
  return results;
}

intersection(arr1, arr2);

//proctice2 frequency
let str1 = "abbc";
let str2 = "acbb";

function frequency(str1, str2) {
  let str1Length = str1.length;
  let str2Length = str2.length;
  let counter1 = {};
  let counter2 = {};
  if (str1Length != str2Length) return false;

  for (let i = 0; i < str1Length; i++) {
    if (!counter1[str1[i]]) {
      counter1[str1[i]] = 1;
    } else {
      counter1[str1[i]]++;
    }
  }
  for (let i = 0; i < str2Length; i++) {
    if (!counter2[str2[i]]) {
      counter2[str2[i]] = 1;
    } else {
      counter2[str2[i]]++;
    }
  }

  for (let property in counter1) {
    if (!counter2[property]) return false;
    if (counter1[property] != counter2[property]) return false;
  }
  return true;
}

console.log(frequency(str1, str2));

//practice 3 average pair //nested for loop
let arr4 = [-11, 0, 1, 2, 3, 9, 14, 17, 21];

function averagePair(arr, avg) {
  //O(n^2)
  if (!arr4) return [];
  let count = 0;
  results = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      if (avg * 2 - arr[j] == arr[i]) {
        console.log(arr[i], arr[j]);
        results.push([arr[i], arr[j]]);
      }
    }
  }
  return results;
}

console.log(averagePair(arr4, 1.5));
