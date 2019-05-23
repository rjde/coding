class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	getRootNode() {
		return this.root;
	}

	insert(data) {
		let newNode = new Node(data)
		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode)
		}
	}

	insertNode(root, node) {
		if (node.data < root.data) {
			if (root.left === null) {
				root.left = node;
			} else {
				this.insertNode(root.left, node);
			}
		} else {
			if (root.right === null) {
				root.right = node;
			} else {
				this.insertNode(root.right, node);
			}
		}
	}

	remove(key) {
		this.root = this.removeNode(this.root, key);
	}

	removeNode(node, key) {
		if (node === null) {
			return null;
		} else if (key < node.data) {
			node.left = this.removeNode(node.left, key);
			return node;
		} else if (key > node.data) {
			node.right = this.removeNode(node.right, key);
			return node;
		} else {
			if (node.left === null && node.right === null) {
				return null;
			} else if (node.left === null) {
				return node.right;
			} else if (node.right === null) {
				return node.left;
			} else {
				var aux = this.findMinNode(node.right);
				node.data = aux.data;
				node.right = this.removeNode(node.right, aux.data);
				return node;
			}
		}
	}

	search(node, data) {
		if (node === null) {
			return null;
		}
		if (data > node.data) {
			return this.search(node.right, data)
		} else if (data < node.data) {
			return this.search(node.left, data)
		} else {
			return node
		}
	}

	findMinNode(node) {
		if (node.left === null) {
			return node;
		} else {
			return this.findMinNode(node.left);
		}
	}
	inorder(root) {
		if (root === null) {
			return;
		}
		this.inorder(root.left);
		console.log(root.data);
		this.inorder(root.right);
	}

	preorder(root) {
		if (root === null) {
			return;
		}
		console.log(root.data);
		this.preorder(root.left);
		this.preorder(root.right);
	}

	postorder(root) {
		if (root === null) {
			return;
		}
		this.postorder(root.left);
		this.postorder(root.right);
		console.log(root.data);
	}
}

let bst = new BinarySearchTree();
bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(13);
bst.insert(5);
bst.insert(9);
bst.insert(27);

let root = bst.getRootNode();
bst.inorder(root);

let searchNode = bst.search(root, 5);
if (searchNode !== null) {
	console.log(searchNode.data);
} else {
	console.log("Node not found");
}

let minNode = bst.findMinNode(root);
console.log(minNode);

bst.remove(5);
bst.remove(13);
bst.inorder(root);

searchNode = bst.search(root, 5);
if (searchNode !== null) {
	console.log(searchNode.data);
} else {
	console.log("Node not found");
}
