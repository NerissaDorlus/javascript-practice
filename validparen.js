/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false


1. check if string begins with a closing character
2. keep track of opening characters
3. once closing bracket is found compare it to the last opening character

 */


const validParen = (str)=>{
    // if(str[0]=== ")" || str[0]=== "}"|| str[0]=== "]" ){
    //     return false
    // }
    let openingBrackets = [];
    
    for(let i = 0; i < str.length; i++){
        if(str[i] === "(" || str[i] === "{" || str[i] === "["){
            openingBrackets.unshift(str[i]) 
        } else {
            if(str[i] === ")" && openingBrackets[0] === "(") {
                openingBrackets.shift()
            } else if(str[i] === "}" && openingBrackets[0] === "{"){
                openingBrackets.shift() 
            } else if (str[i] === "]" && openingBrackets[0] === "["){
                openingBrackets.shift()
            } else {
                return false
            }
        }
    }
    return true
}