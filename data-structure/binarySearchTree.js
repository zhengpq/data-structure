class BinarySearchTreeNode {
  constructor(data) {
    this.data = data,
    this.leftTree = null
    this.rightTree = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(data) {
    const newTreeNode = new BinarySearchTreeNode(data)
    // 如果是空树，直接将插入的节点赋值给根节点
    if (this.root === null) {
      this.root = newTreeNode
    } else {
      let current = this.root
      while(current !== null) {
        if (data < current.data) {
          if (current.leftTree === null) {
            current.leftTree = newTreeNode
            break
          } else {
            current = current.leftTree
          }
        } else if (data > current.data)  {
          if (current.rightTree === null) {
            current.rightTree = newTreeNode
            break
          } else {
            current = current.rightTree
          }
        } else {
          break
        }
      }
    }
  }
  has(data) {
    let current = this.root
    let result = false
    while(current !== null) {
      if (data < current.data) {
        current = current.leftTree
      } else if (data > current.data) {
        current = current.rightTree
      } else {
        result = true
        break
      }
    }
    return result
  }
  delete() {}
  size() {}
}

const tree1 = new BinarySearchTree()
tree1.insert(5)
tree1.insert(3)
tree1.insert(2)
tree1.insert(1)
console.log('pakizheng', tree1.has(8))
