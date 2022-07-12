// Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.

// test_00:
// const a = new Node(5);
// const b = new Node(5);
// const c = new Node(7);
// const d = new Node(7);
// const e = new Node(7);
// const f = new Node(6);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// // 5 -> 5 -> 7 -> 7 -> 7 -> 6

// longestStreak(a); // 3
// test_01:
// const a = new Node(3);
// const b = new Node(3);
// const c = new Node(3);
// const d = new Node(3);
// const e = new Node(9);
// const f = new Node(9);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// // 3 -> 3 -> 3 -> 3 -> 9 -> 9

const longestStreak = (head) => {
  let current = head;
  let prev = null;
  let nowStreak = 0;
  let maxStreak = 0;
  while(current !== null){
    if(current.val === prev){
      nowStreak++
    } else{
      nowStreak = 1
    }
    
    if( nowStreak > maxStreak){
      maxStreak = nowStreak;
    }
    prev = current.val;
    current = current.next;
  }
  return maxStreak;
};


// longestStreak(a); // 4
// test_02:
// const a = new Node(9);
// const b = new Node(9);
// const c = new Node(1);
// const d = new Node(9);
// const e = new Node(9);
// const f = new Node(9);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// // 9 -> 9 -> 1 -> 9 -> 9 -> 9

// longestStreak(a); // 3
// test_03:
// const a = new Node(5);
// const b = new Node(5);

// a.next = b;

// // 5 -> 5

// longestStreak(a); // 2
// test_04:
// const a = new Node(4);

// // 4

// longestStreak(a); // 1
// test_05:
// longestStreak(null); // 0
