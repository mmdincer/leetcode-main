/*
You are given a binary string s that contains at least one '1'.

You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination.

Return a string representing the maximum odd binary number that can be created from the given combination.

Note that the resulting string can have leading zeros.

Example 1:
Input: s = "010"
Output: "001"
Explanation: Because there is just one '1', it must be in the last position. So the answer is "001".

Example 2:
Input: s = "0101"
Output: "1001"
Explanation: One of the '1's must be in the last position. The maximum number that can be made with the remaining digits is "100". So the answer is "1001".
*/

var maximumOddBinaryNumber = function(s) {
    // Binary stringi sıralama
    let sorted = s.split('').sort().reverse(); // '1'ler başta, '0'lar sonda

    // Eğer hiç '1' yoksa, tek bir binary sayı oluşturulamaz
    if (!sorted.includes('1')) {
        return ''; // Tek binary mümkün değil
    }

    // Son basamağı '1' yapmak için, bir '1' çıkar
    sorted.splice(sorted.indexOf('1'), 1); // İlk '1'i çıkar
    sorted.push('1'); // En sona ekle

    // Sonuç binary string olarak döndürülür
    return sorted.join('');
};
