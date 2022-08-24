//Given an array of integers nums and an integer target, return the two numbers such that they add up to target.


//first example 2 loops
const twosum = (arr, target)=>{
    for(let i = 0; i< arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === target)
     return[arr[i], arr[j]]
        }
    }
}

//time complexity = O(N^2) Space complexity = O(N) : constant
    
