// uncompress
// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

// <number><char>

// for example, '2c' or '3a'.
// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

// test_00:
// uncompress("2c3a1t"); // -> 'ccaaat'
// test_01:
// uncompress("4s2b"); // -> 'ssssbb'
// test_02:
// uncompress("2p1o5p"); // -> 'ppoppppp'
// test_03:
// uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
// test_04:
// uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'

const uncompress = (s) => {
  let i = 0;
  let j = 0;
  let nums = "1234567890";
  let res = [];
  while(j < s.length){
    if(nums.includes(s[j])){
      j++
    } else {
      let repeat = Number(s.slice(i,j));
      for(let i= 0; i<repeat; i++){
        res.push(s[j])
      }
      j++
      i = j;
    }
  }
  return res.join("");
}
