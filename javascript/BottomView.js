function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

//         20
//       /    \
//     8       22
//   /   \      \
// 5      3      25
//       / \      
//     10    14
//
//  Bottom view -> 5, 10, 3, 14, 25

let root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.right.right = new Node(25);
root.left.left = new Node(5);
root.left.right = new Node(3);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);

function printBottomView(root) {
  let bottomView = {};
  let queue = [];

  queue.push({ node: root, hd: 0 });

  while (queue.length > 0) {
    let firstNode = queue.shift();
    let hd = firstNode.hd;
    let left = firstNode.node.left;
    let right = firstNode.node.right;

    bottomView[hd] = firstNode.node.data;

    if (left) {
      queue.push({ node: left, hd: hd - 1 })
    }
    if (right) {
      queue.push({ node: right, hd: hd + 1 });
    }
  }

  let result = Object.keys(bottomView).sort((a, b) => a - b);
  return result.map(key => bottomView[key]);
}

console.log(printBottomView(root));


