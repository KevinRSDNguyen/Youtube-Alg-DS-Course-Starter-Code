class Node(){
  constructor(val){
    this.val = val;
    this.next = null; 
  }
}

const printLinkedList = (head) => {
  let current = head;
  while(current !== null){
    console.log(current.val);
    current = current.next;
  }
}

printLinkedList(a);
    
