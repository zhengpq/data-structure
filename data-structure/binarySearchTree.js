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
    this.length = 0
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
    ++ this.length
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
  findMin() {
    if (this.size() === 0) {
      console.error('the tree is empty')
      return
    }
    let current = this.root
    while (current.leftTree !== null) {
      current = current.leftTree
    }
    return current.data
  }
  findMax() {
    if (this.size() === 0) {
      console.error('the tree is empty')
      return
    }
    let current = this.root
    while (current.rightTree !== null) {
      current = current.rightTree
    }
    return current.data
  }
  delete() {
    
  }
  size() {
    return this.length
  }
  // 遍历二叉树
  traverse() {}
  // 将树结构用字符串表示出来
  toString() {}
}

const tree1 = new BinarySearchTree()
tree1.insert(5)
tree1.insert(3)
tree1.insert(2)
tree1.insert(1)
console.log('pakizheng', tree1.has(8))
console.log('pakizheng', tree1.findMin())
console.log('pakizheng', tree1.findMax())
