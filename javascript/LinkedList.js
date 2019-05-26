class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(key) {
    let newNode = new Node(key);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let ptr = this.head;
      while (ptr.next !== null) {
        ptr = ptr.next;
      }
      ptr.next = newNode;
    }
  }

  delete(key) {
    let ptr = this.head;

    if (ptr === null) {
      return;
    }

    // handle head node
    if (ptr.data === key) {
      this.head = this.head.next;
      return;
    }

    while (ptr !== null && ptr.next !== null) {
      if (ptr.next.data === key) {
        ptr.next = ptr.next.next;
        return;
      }
      ptr = ptr.next;
    }

    console.log("node not found");
  }

  printList() {
    let ptr = this.head;

    if (ptr === null) {
      console.log("list is empty");
    }

    while (ptr !== null) {
      console.log(ptr.data);
      ptr = ptr.next;
    }
  }
}

module.exports = LinkedList