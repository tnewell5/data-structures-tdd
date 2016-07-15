function ListNode(val) {
  this.val = val;
  this.next = null;
}

// create new singly-linked list:
var myList = new ListNode(1);
myList.next = new ListNode(2);
myList.next.next = new ListNode(3);

var head = myList;

// create a doubly-linked list:
var previous = null;
while (head){
  head.previous = previous;
  previous = head;
  head = head.next;
}

//pointer1 points to beginning of list:
var pointer1 = myList;
//pointer2 points to end of list:
var pointer2 = previous;
var isPalindrome = true;
while (pointer1 && pointer2) {
  if (pointer1.val != pointer2.val) {
    isPalindrome = false;
  }
  pointer1 = pointer1.next;
  pointer2 = pointer2.previous;
}

//first create new ListNode:
var newNode = new ListNode(5);
newNode.previous = null;

//now connect newNode to the rest of the list:
newNode.next = myList;
myList.previous = newNode;
myList = myList.previous;

//delete a node from the list:
// iterate over the list and keep track of previous value
// once node value is a match, set the prevoius.next to current.next
function deleteNode(nodeVal) {
  var prev = myList;
  var pointer = myList;
  // if this is the first node in the list, set myList to myList.next and myList.previous to null
  if (pointer.val === nodeVal) {
    myList = myList.next;
    myList.previous = null;
  }
  // while pointing to a valid node:
  while (pointer) {
    if (pointer.val === nodeVal) {
      prev.next = pointer.next;
      if (pointer.next) {
      pointer.next.previous = prev;
      }
    }
    prev = pointer;
    pointer = pointer.next;
  }
}

deleteNode(3);
console.log('myList: ', myList);
