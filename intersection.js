// intersection
// Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

// test_00:
// intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]
// test_01:
// intersection([2,4,6], [4,2]) // -> [2,4]
// test_02:
// intersection([4,2,1], [1,2,4,6]) // -> [1,2,4]
// test_03:
// intersection([0,1,2], [10,11]) // -> []
// test_04:
// const a = [];
// const b = [];
// for (let i = 0; i < 50000; i += 1) {
//   a.push(i);
//   b.push(i);
// }
// intersection(a, b) // -> [0,1,2,3,..., 49999]

const intersection = (a, b) => {
  const result = [];
  const setA = new Set(a);
  for (let item of b) {
    if (setA.has(item)) {
      result.push(item);
    }
  }
  return result;
};
n = length of array a, m = length of array b
Time: O(n+m)
Space: O(n)
