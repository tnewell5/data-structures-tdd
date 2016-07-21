var Lists;

Lists = {
  listNode: function(val) {
    this.val = val;
    this.next = null;
  },
  //delete a node from the list:
  // iterate over the list and keep track of previous value
  // once node value is a match, set the prevoius.next to current.next
  deleteNode: function(nodeVal) {
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
  },
  //compare 2 linked lists and output 0 if the same, 1 if list 1 is lexi greater,
  //and -1 if 2 is lexi greater:
  greaterLexList: function(list1, list2) {
    while (list1) {
      if (!list2) return 1;
      if (list1.val.charCodeAt(0) > list2.val.charCodeAt(0)) {
        return 1;
      } else if (list1.val.charCodeAt(0) < list2.val.charCodeAt(0)) {
        return -1;
      }
      list1 = list1.next;
      list2 = list2.next;
    }
    if (list2) return -1;
    return 0;
  }
};

//console.log(new Lists.listNode(25));

// create new singly-linked list:
var myList = new Lists.listNode(1);
myList.next = new Lists.listNode(2);
myList.next.next = new Lists.listNode(3);
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

//first create new listNode:
var newNode = new Lists.listNode(5);
newNode.previous = null;

//now connect newNode to the rest of the list:
newNode.next = myList;
myList.previous = newNode;
myList = myList.previous;

Lists.deleteNode(3);
//console.log('myList: ', myList);

var list1 = new Lists.listNode('a');
list1.next = new Lists.listNode('b');
list1.next.next = new Lists.listNode('c');

var list2 = new Lists.listNode('b');
list2.next = new Lists.listNode('b');
//list2.next.next = new Lists.listNode('c');
//list2.next.next.next = new Lists.listNode('a');

console.log(Lists.greaterLexList(list1, list2));

module.exports = Lists;
