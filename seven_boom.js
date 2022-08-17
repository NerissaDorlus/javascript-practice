//Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. 
//Otherwise, return "there is no 7 in the array".

const arr1 =[1, 2, 17, 5, 9]

const sevenBoom = (arr)=>{
    if(arr.join().includes(7)){
        return "Boom!"
    }
    return "there is no 7 in the array"
}


console.log(sevenBoom(arr1))








