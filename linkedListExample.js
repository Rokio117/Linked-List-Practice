class _Node {
  constructor(value, next) {
    this.value = value; //the value contained in the node
    this.next = next; //the pointer
  }
}

class LinkedList {
  constructor() {
    this.head = null; //head always contains the first node.
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head); //give it "head" as next because after this is first, what is currently head would be 2nd
    //also setting head to a new node where its "next" is the current head
  }
  insertLast(item) {
    //create new node item
    //chec if list is empty , if it is intert item as onlyone in list
    //start and begining of list and move through until you reach end
    //set nodes next pointer to the new node
    //the new nodes next pointer is null
    if (this.head === null) {
      this.head = new _Node(item, this.head);
      //or this.insertFirst(item)
    } else {
      let tempNode = this.head; //starting point
      while (tempNode.next !== null) {
        // if current pointer is not equal to null, change current node to next,
        tempNode = tempNode.next; //set current node to the next of current node
      }
      tempNode.next = new _Node(item, null); //when it finds node where next=null, sets its next to new node instead, and sets new node's next to null
    }
  }
  find(item) {
    let currNode = this.head;
    if (!currNode) {
      return null;
    }
    while (currNode !== item) {
      //this will break when item is found, will run if not found
      if (currNode.next === null) {
        //if you reach the end of the list without finding the item
        return null;
      } else currNode = currNode.next; //sets current node to next node, this is how we are looping through
    }
    return currNode; //found
  }
  remove(item) {
    //if item is head, set head to point to next item?
    //go through list until you find item, keeping track of item before it
    //if item is not fund return null...?
    //once found, set the privious items next to the item to be removed's next
    if (!this.head) {
      //there is no list
      return null;
    }
    if (this.head.value === item) {
      //if the head is the item to be removed
      this.head = this.head.next; //set head to the next node in the chain
      return; //why are we returning nothing?
    }
    let currNote = this.head; //start at the head
    let previousNote = this.head; //keep track of previous node, so we can set its next to the one after what we want to remove
    while (currNote !== null && currNode.value !== item) {
      //while current note isn't the last, and it also doesn't contain the value we are looking for
      let previousNote = currNote; //since we will be moving forward, previous note becomes current note
      let currNote = currNote.next; //set current note to the next note
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNote.next = currNode.next; // this is where the money is at. Sets the next of the previous node, to the next of the current node
    //this will effectively make sure the current node is never gotten to by a next
  }
}
