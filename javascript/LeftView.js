function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}


function printInorder(node) {
  if (node === null) {
    return;
  }
  printInorder(node.left);
  console.log(node.data);
  printInorder(node.right);
}

// Left view function without recursion
function printLeftView(root) {
  let leftView = [];
  let queue = [];

  queue.push(root);

  while (queue.length > 0) {
    leftView.push(queue[0].data);
    let tempQueue = []
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].left) {
        tempQueue.push(queue[i].left);
      }
      if (queue[i].right) {
        tempQueue.push(queue[i].right)
      }
    }
    queue = tempQueue;
  }

  return leftView;
}


// Print left view using recursion
let global_max_level = 0;
let global_result = [];

function printLeftView_recur(root, level) {
  if (root === null) {
    return;
  }

  if (level === undefined) {
    level = 1;
  }

  if (global_max_level < level) {
    global_result.push(root.data);
    global_max_level = level;
  }

  printLeftView_recur(root.left, level + 1);
  printLeftView_recur(root.right, level + 1);
}

//  Binary tree View
//           4 
//         /  \ 
//        5   2 
//           / \ 
//          3  1 
//        /  \
//       6    7
//   
//  Left view -> 4, 5, 3, 6

let root = new Node(4);
root.left = new Node(5);
root.right = new Node(2);
root.right.left = new Node(3);
root.right.right = new Node(1);
root.right.left.left = new Node(6);
root.right.left.right = new Node(7);

printInorder(root);
console.log(printLeftView(root));
printLeftView_recur(root);
console.log(global_result);


