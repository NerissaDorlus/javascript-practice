//Given an array and a target return the indices of 2 elements that add up to the target

let array1 = [1, 2, 5, 3, 10, 7];
let target1 = 13;

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let res = arr[i] + arr[j] === target;
      if (res) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum(array1, target1));
