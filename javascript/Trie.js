class TrieNode {
  constructor(key) {
    this.key = key;
    this.children = {};
    this.parent = null;
    this.end = false;
  }

  setParent(parentNode) {
    this.parent = parentNode;
  }

  getWord() {
    let node = this;
    let word = [];
    while (node) {
      word.push(node.key);
      node = node.parent;
    }
    return word.reverse().join("");
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        node.children[word[i]] = new TrieNode(word[i]);
        node.children[word[i]].setParent(node);
      }

      node = node.children[word[i]];

      if (i === word.length - 1) {
        node.end = true;
      }
    }
  }

  contains(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      if (node.children[word[i]]) {
        node = node.children[word[i]];
      } else {
        return false;
      }
    }

    return node.end;
  }

  find(prefix) {
    let node = this.root;
    let result = [];

    for (let i = 0; i < prefix.length; i++) {
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]];
      } else {
        return result;
      }
    }

    this.findAllWords(node, result);
    return result;
  }

  findAllWords(node, result) {
    if (node.end) {
      result.push(node.getWord());
    }

    for (let child in node.children) {
      this.findAllWords(node.children[child], result);
    }
  }
}

var trie = new Trie();

// insert few values
trie.insert("hello");
trie.insert("helium");

// check contains method
console.log(trie.contains("helium"));  // true
console.log(trie.contains("kickass")); // false

// check find method
console.log(trie.find("hel"));  // [ 'helium', 'hello' ]
console.log(trie.find("hell")); // [ 'hello' ]