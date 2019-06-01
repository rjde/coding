function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

// Example 1
//         20
//       /    \
//     8       22
//   /   \      \
// 5      3      25
//       / \      
//     10    14
//
//  Vertical Order -> 5, 8, 10, 20, 3, 22, 14, 25

let root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.right.right = new Node(25);
root.left.left = new Node(5);
root.left.right = new Node(3);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);

// Example 1
//         1
//       /  \
//     2     3
//         /  
//        5      
//  Vertical Order -> 2, 1, 5, 3

let root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
root2.right.left = new Node(5);

function printBottomView(root) {
  let bottomView = {};
  let queue = [];

  queue.push({ node: root, hd: 0 });

  while (queue.length > 0) {
    let firstNode = queue.shift();
    let hd = firstNode.hd;
    let left = firstNode.node.left;
    let right = firstNode.node.right;

    if (!bottomView[hd]) {
      bottomView[hd] = [];
    }

    bottomView[hd].push(firstNode.node.data);

    if (left) {
      queue.push({ node: left, hd: hd - 1 });
    }
    if (right) {
      queue.push({ node: right, hd: hd + 1 });
    }
  }

  let result = Object.keys(bottomView).sort((a, b) => a - b);
  console.log(result);
  return [].concat.apply([], result.map(key => bottomView[key]));
}

console.log(printBottomView(root));
console.log(printBottomView(root2));


