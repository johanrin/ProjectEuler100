function largeSum(arr) {
  let sum = 0;
  let sliceNumber;

  for (let i = 0; i <= arr.length - 1; i += 1) {
    sliceNumber = arr[i].slice(0, 11);
    sum += parseInt(sliceNumber, 10);
  }

  return parseInt(sum.toString().slice(0, 10));
}

// Only change code above this line

const testNums = [
  "37107287533902102798797998220837590246510135740250",
  "46376937677490009712648124896970078050417018260538",
];

largeSum(testNums);
