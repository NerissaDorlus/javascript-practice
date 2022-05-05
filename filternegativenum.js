let arr1 = [0, 5, 10, -1, -9, -3, 100, -99];

function filterNegativeNum(arr) {
  let negativeArr = [];
  for (let i = 0; i < arr.length; i++)
    if (arr[i] < 0) {
      negativeArr.push(arr[i]);
    }
  return negativeArr;
}
console.log(filterNegativeNum(arr1));
