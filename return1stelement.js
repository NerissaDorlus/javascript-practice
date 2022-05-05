const arr1 = [6, 8, 10, 4, 2, 6];

function findFirstElement(arr) {
  //return arr[0]; // same as below
  return arr.shift();
}
console.log(findFirstElement(arr1));
