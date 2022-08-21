//practice recursive sequence
function rs(n) {
  console.log(n);
  if (n == 1) {
    return 10;
  } else {
    return rs(n - 1) + 15;
  }
}

//console.log(rs(3));

//rs(3) => rs(2)
//rs(2) => rs(1)
//rs(1) => 10

//rs(3) => 25+15  = 40
//rs(2) => 10+15
//rs(1) => 10

//fibonacci sequence

function fs(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fs(n - 1) + fs(n - 2);
  }
}

for (let i = 0; i < 10; i++) {
  console.log(fs(i));
}

//practice array of arrays
let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];

function collecter(arr1) {
  let result = [];
  SubCollecter(arr1);
  console.log(result);
  return result;
  function SubCollecter(arr2) {
    for (let i = 0; i < arr2.length; i++) {
      if (Array.isArray(arr2[i])) {
        SubCollecter(arr2[i]);
      } else {
        result.push(arr2[i]);
      }
    }
  }
}

collecter(arrs);
