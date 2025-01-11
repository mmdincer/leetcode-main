/*
Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

An integer m is a divisor of n if there exists an integer k such that n = k * m.

Example 1:
Input: n = 2
Output: false
Explantion: 2 has only two divisors: 1 and 2.

Example 2:
Input: n = 4
Output: true
Explantion: 4 has three divisors: 1, 2, and 4.
*/

var isThree = function(n) {
    let counter = 0;
    for(let i=2; i<n; i++) { //verilen sayı 1'e ve kendisine kesin olarak bölüneceği için gereksiz kontrollerden kaçtık
        if(n%i == 0) counter++; 
    }
    if(counter == 1) return true; //sadece 3 bölüneni olduğu durumu alacağımız için 
    else return false;
};