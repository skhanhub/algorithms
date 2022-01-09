// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const reverseList = (head) => {
  if(head === null) return null
  let prev = null
  let current = head
  let next
  while(current !== null){
    next = current.next
    current.next = prev
    prev = current
    current = next
    
  }
  return prev
};


module.exports = {
  reverseList
};