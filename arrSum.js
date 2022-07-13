//Write a Function that takes in an array of numbers and then finds the total sum of those numbers.

function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// let array = [2, 13, 56, 24, 99, 65, 239, 47, 3];

// console.log(sumArr(array));

//Next then rewrite the function that only adds up the numbers divisible by 2 and 5 and returns a whole number.

function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] % 5 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

let array = [2, 13, 56, 24, 99, 65, 239, 47, 3];
console.log(sumArr(array));

// Next rewrite the function that only adds up the total of prime numbers in the set array.
// Test case: [2, 13, 56, 24, 99, 65, 239, 47, 3]

function sumPrimeArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}
