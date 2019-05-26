class Node {
  constructor(data) {
    this.data = data;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  max(a, b) {
    return a > b ? a : b;
  }

  getRootNode() {
    return this.root;
  }

  getHeight(node) {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  rotateRight(node) {
    let left = node.left;
    let temp = left.right;

    // perform rotation
    left.right = node;
    node.left = temp;

    // update heights after rotation
    left.height = this.max(this.getHeight(left.left), this.getHeight(left.right));
    node.height = this.max(this.getHeight(node.left), this.getHeight(node.right));

    return left;
  }

  rotateLeft(node) {
    let right = node.right;
    let temp = right.left;

    // perform rotation
    right.left = node;
    node.right = temp;

    // update heights after rotation
    right.height = this.max(this.getHeight(right.left), this.getHeight(right.right));
    node.height = this.max(this.getHeight(node.left), this.getHeight(node.right));

    return right;
  }

  getBalance(node) {
    let leftHeight = this.getHeight(node.left);
    let rightHeight = this.getHeight(node.right);
    return leftHeight - rightHeight;
  }

  insert(data) {
    let newNode = new Node(data);
    let res = null;
    if (this.root === null) {
      this.root = newNode;
      res = this.root;
    } else {
      res = this.insertNode(this.root, newNode);
    }
    return res;
  }

  insertNode(root, node) {
    if (node.data < root.data) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else if (node.data > root.data) {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    } else {
      console.log("Element already exists");
    }

    root.height = 1 + this.max(this.getHeight(root.left), this.getHeight(root.right));

    let balance = this.getBalance(root);

    // Left Left Case
    if (balance > 1 && node.data < root.left.data)
      return this.rotateRight(root);

    // Right Right Case 
    if (balance < -1 && node.data > root.right.data)
      return this.rotateLeft(root);

    // Left Right Case 
    if (balance > 1 && node.data > root.left.data) {
      root.left = this.rotateLeft(root.left);
      return this.rotateRight(root);
    }

    // Right Left Case 
    if (balance < -1 && node.data < root.right.data) {
      root.right = this.rotateRight(root.right);
      return this.rotateLeft(root);
    }

    /* return the (unchanged) node pointer */
    return root;
  }

  inorder(root) {
    if (root === null) {
      return;
    }
    let bal = this.getBalance(root);
    this.inorder(root.left);
    console.log(root.data + " => height = " + root.height + " => balance = " + bal);
    this.inorder(root.right);
  }

}


let avl = new AVLTree();
avl.insert(15);
avl.insert(25);
avl.insert(10);
avl.insert(7);
avl.insert(22);
avl.insert(17);
avl.insert(13);
avl.insert(5);
avl.insert(1);
avl.insert(9);
let root = avl.insert(27);

//  Without balancing
//          15 
//         /  \ 
//        10   25 
//       / \   / \ 
//      7  13 22  27 
//     / \    / 
//    5   9  17 
//   /
//  1

let root = avl.getRootNode();
avl.inorder(root);

