// most frequent char
// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

// test_00:
// mostFrequentChar('bookeeper'); // -> 'e'
// test_01:
// mostFrequentChar('david'); // -> 'd'
// test_02:
// mostFrequentChar('abby'); // -> 'b'
// test_03:
// mostFrequentChar('mississippi'); // -> 'i'
// test_04:
// mostFrequentChar('potato'); // -> 'o'
// test_05:
// mostFrequentChar('eleventennine'); // -> 'e'
// test_06:
// mostFrequentChar("riverbed"); // -> 'r'

const mostFrequentChar = (s) => {
  let obj = {};
  let maxChar = null;
  
  for(let char of s){
    obj[char] = obj[char] + 1 || 1;
  }
  for(let char of s){
    if( maxChar === null || obj[char] > obj[maxChar]){
      maxChar = char;
    }
  }
  return maxChar;
}
