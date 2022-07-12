const printLinkedList = (head) => {
  if(head === null) return;
  console.log(head.val(;
  printLinkedList(head.next);
 };
