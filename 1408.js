/*
Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

A substring is a contiguous sequence of characters within a string

Example 1:
Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.

Example 2:
Input: words = ["leetcode","et","code"]
Output: ["et","code"]
Explanation: "et", "code" are substring of "leetcode".

Example 3:
Input: words = ["blue","green","bu"]
Output: []
Explanation: No string of words is substring of another string.
*/

var stringMatching = function(words) {
    const result = new Set(); //değerlerin benzersiz olması için set kullandık
    for (const word of words) {
        for (const w of words) {
            if (word !== w && word.includes(w)) { //kendisini içerme kontrolünü yapmamasını sağlıyoruz
                result.add(w); 
            }
        }
    }
    return [...result]; //set'i array'e çevirdik
};
