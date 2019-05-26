const LinkedList = require('../LinkedList');

let list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(5);
list.insert(6);
list.insert(10);

list.printList();

list.delete(1);
console.log("deleting 1")
list.printList();
list.delete(2);
console.log("deleting 2")
list.printList();
list.delete(3);
console.log("deleting 3")
list.printList();
list.delete(4);
console.log("deleting 4")
list.printList();
list.delete(5);
console.log("deleting 5")
list.printList();
list.delete(6);
console.log("deleting 6")
list.printList();
list.delete(10);
console.log("deleting 10")
list.printList();