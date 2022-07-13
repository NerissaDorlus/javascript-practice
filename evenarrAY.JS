let arr1 = [5, 10, 20, 7, 9, 13];

function findEvenArr(arr) {
  let evenArr = [];
  for (let i = 0; i < arr.length; i++)
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    }
  return evenArr;
}
console.log(findEvenArr(arr1));
