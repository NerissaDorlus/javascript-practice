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
    

/* user a map
create a set

add every element to set
find if()
*/

const twoSumWSet = (arr, target) => {
    const sett = new set();
    for(let i = 0; i < arr.length; i++){
        set.add(arr[i])

    }
    for(let i = 0; i < arr.length; i++){
        const num = target - arr[i]
        if(set.has(num)){
            retturn[arr[i], num]
        }
    }
}
//Time complexity: O(N) Space complexity: O(N)

/* sorting
-sort tthe array
-use 2 pointer algo tto find target
*/

const twoSumSort = (arr, target) => {
    const s = arr.sort((a, b) => a - b)
    let i = 0, j = s.length - 1
    while(i < j){
        const sum = s[i] + s[j];
        if(sum > t){
            j--;
        }else if(sum < t){
            i++
        } else {
            return[s[i], s[j]]
        }
    }
}

/* Time complexity: O(N)
Space complexity: O(N) */