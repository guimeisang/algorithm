class Trie {
  constructor() {
    this.root = {}
  }

  insert(word) {
    let node = this.root
    for (let c of word) {
      console.log('node', this.root, node)
      if (node[c] == null) node[c] = {}
      node = node[c]
      console.log('node', this.root, node)
    }
    node.isWord = true
  }

  search(word) {
    const node = this.traverse(word)
    return node != null && node.isWord === true
  }

  startsWith(prefix) {
    return this.traverse(prefix) != null
  }

  traverse(word) {
    let node = this.root
    for (let c of word) {
      node = node[c]
      if (node == null) return null
    }
    return node
  }
}

let trie = new Trie()
trie.insert('apple')
trie.search('apple') // 返回 true
trie.search('app') // 返回 false
trie.startsWith('app') // 返回 true
trie.insert('app')
trie.search('app') // 返回 true
