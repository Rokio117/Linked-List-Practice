class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null; //starts with nothing inside
  }
  insertFirst(value) {
    //if head = null (no items) set head to new _Node, with its next = null
    //otherwise set head to new _Node which has value=value, next = this.head.next
    //actually, if head is null the next of the new Node will be null regardless

    this.head = new _Node(value, this.head);
  }
  insertLast(item) {
    //if the head is null, it would mean the end is the same as the begining, so you just use insertFirst
    //otherwise we need to go through the list
    //once null is found, set next of that node to new node, which will have null as its next
    if (this.head === null) {
      this.insertFirst(item);
    }

    let tempNode = this.head;

    while (tempNode.next !== null) {
      //this will stop once tempNode.next equals null
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(item, null);
  }
  remove(item) {
    //if head == null return error
    //1. Find item
    //2. Set previous item's next, to the next of the found item
    //if we don't find the item, send back response message
    if (!this.head) {
      //if there is no list
      return null;
    }

    if (this.head.value === value) {
      //if the value is the first in the list, set current head to the next of current head
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      //this will run until next = null or value is found
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next; //ensure currentNode will never be called
  }
  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      //stops when we get either null or current value
      if (currNode === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }

    return currNode;
  }
}

function main() {
  const itemsToAdd = ["Apollo", "Boomer", "Helo", "Husker", "Starbuck"];
  let SSL = new LinkedList();
  itemsToAdd.forEach(item => {
    SSL.insertLast(item);
  });
  console.log(SLL, "SLL");
}
