/**
 * Author: Connor J Webdale 
 * Date: 3.5.20
 * 
 * filename: intcode.js
 */

 // initializing the intCode array 
let intCode = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,2,19,6,23,2,13,23,27,1,9,27,31,2,31,9,35,1,6,35,39,2,10,39,43,1,5,43,47,1,5,47,51,2,51,6,55,2,10,55,59,1,59,9,63,2,13,63,67,1,10,67,71,1,71,5,75,1,75,6,79,1,10,79,83,1,5,83,87,1,5,87,91,2,91,6,95,2,6,95,99,2,10,99,103,1,103,5,107,1,2,107,111,1,6,111,0,99,2,14,0,0];
// created a function so that I can use return statements 
function runCode(intCode) {
    // the beginning intCode 
    console.log(intCode);
    // used a for loop so that I can increase i by 4 each time the loop iterates, 
    // and so that I can use index values for the array 
    for (let i = 0; i < intCode.length; i=i+4) {
        // setting code to be whatever the value of the current element is 
        const code = intCode[i];
        // checks if the OptCode is 99, and if it is, returns the finished array 
        if (code==99) {
            return intCode;
        } else { 
            if (code==1) { // checks if the OptCode is 1
                /** 
                 * num1 is set to the value immediately folling the current element 
                 * num2 is set to the value 2 away from the current element 
                 * num3 is set to the value 3 away from the current element 
                 */
                num1 = intCode[i+1];
                num2 = intCode[i+2];
                num3 = intCode[i+3];
                /**
                 * Since num3 tells us the index of the value to be replaced, I call 
                 * the IntCode array using num3 as the index. 
                 * The OptCode is 1, which means we will be adding the two numbers 
                 * immediately following the OptCode value 
                 */
                intCode[num3] = intCode[num1]+intCode[num2];
            } else if (code==2) { // checks if the OptCode is 2
                num1 = intCode[i+1];
                num2 = intCode[i+2];
                num3 = intCode[i+3];
                /**
                 * Same as above, but since the OptCode is 2, I multiply the two values 
                 * following it. 
                 */
                intCode[num3] = intCode[num1]*intCode[num2]; 
            } else {
                // do nothing
            }
        }
    }
}
// the final IntCode 
console.log(runCode(intCode));