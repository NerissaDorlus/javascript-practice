//write a function that only adds up the total of prime numbers in the set array.
let arr1 = [2, 13, 56, 24, 99, 65, 239, 47, 3];

function sumPrimeArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // test if this is a prime number but seeing if it is divisible by any number one less than itself looping
    let isPrime = true; // I will keep track if this is a prime number with this variable
    for (let j = arr[i] - 1; j > 1; j--) {
      if (arr[i] % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      sum += arr[i];
      console.log(arr[i]);
    }
  }
  return sum;
}

console.log(sumPrimeArr(arr1));
