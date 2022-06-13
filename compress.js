// compress
// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'
// You can assume that the input only contains alphabetic characters.

// test_00:
// compress('ccaaatsss'); // -> '2c3at3s'
// test_01:
// compress('ssssbbz'); // -> '4s2bz'
// test_02:
// compress('ppoppppp'); // -> '2po5p'
// test_03:
// compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
// test_04:
// compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'); 
// // -> '127y'

const compress = (s) => {
  
  let j = 0;
  let i = 0;
  let res = [];
  
  while(j <= s.length){
    if(s[i] === s[j]){
      j++;
    } else{
      let length = j-i;
      if(length === 1){
        res.push(s[i]);
      } else{
        res.push(Number(length), s[i]); 
      }
      i = j;
    }
  }
    return res.join("")
}
