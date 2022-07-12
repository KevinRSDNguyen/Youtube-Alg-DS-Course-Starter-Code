// anagrams
// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

// test_00:
// anagrams('restful', 'fluster'); // -> true
// test_01:
// anagrams('cats', 'tocs'); // -> false
// test_02:
// anagrams('monkeyswrite', 'newyorktimes'); // -> true
// test_03:
// anagrams('paper', 'reapa'); // -> false
// test_04:
// anagrams('elbow', 'below'); // -> true
// test_05:
// anagrams('tax', 'taxi'); // -> false
// test_06:
// anagrams('taxi', 'tax'); // -> false
// test_07:
// anagrams('night', 'thing'); // -> true
// test_08:
// anagrams('abbc', 'aabc'); // -> false

const anagrams = (s1, s2) => {
let count = {};
 for(let char of s1){
  count[char] = count[char] + 1 || 1
 }
  for(let char of s2){
    if(char in count){
      count[char] --
    }else{
       return false;
    }
  }
  for(let char in count){
    if(count[char] !== 0){
      return false;
    }
  }
  return true;
};
