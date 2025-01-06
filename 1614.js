/*
Maximum Nesting Depth of the Parentheses

Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.

Example 1:
Input: s = "(1+(2*3)+((8)/4))+1"
Output: 3
Explanation:
Digit 8 is inside of 3 nested parentheses in the string.

Example 2:
Input: s = "(1)+((2))+(((3)))"
Output: 3
Explanation:
Digit 3 is inside of 3 nested parentheses in the string.

Example 3:
Input: s = "()(())((()()))"
Output: 3

 
Constraints:
1 <= s.length <= 100
s consists of digits 0-9 and characters '+', '-', '*', '/', '(', and ')'.
It is guaranteed that parentheses expression s is a VPS.
*/

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let number = 0; //Anlık artırıp azaltacağım değerler
    let maxNum = 0; //maksimum değerimi tutacağım
    for(const char of s) { //girilen stringin her karakterini sırayla gezecek
        if(char == "(") { //"(" karakterini gördüğünde number'ı 1 arttıracak 
            number++;
            maxNum = Math.max(maxNum, number); // max fonk sayesinde girilen 2 değerin max'ını bulup maxNum'a atadık
        }
        else if(char == ")") { //")" karakterini gördüğünde number'ı 1 azaltacak
            number--;
        }
    }

    return maxNum;
};