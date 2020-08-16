class LinkedListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.header = null
    this.length = 0
  }
  // 在链表结尾加上一个节点
  add(data) {
    let current = this.header
    const newNode = new LinkedListNode(data)
    this.length += 1
    if (current === null) {
      this.header = newNode
      return
    }
    while(current.next !== null) {
      current = current.next
    }
    current.next = newNode
  }
  includes(data) {
    let current = this.header
    let result = false
    while(current.next !== null) {
      result = data === current.data
      current = current.next
    }
    return result
  }
  indexOf(data) {
    let index = -1
    let current = this.header
    while(current !== null && current.data !== data) {
      current = current.next
      index = index === -1 ? index + 2 : ++ index
    }
    return index
  }
  find(index) {
    if (index > this.length) {
      throw new Error(`out of space, the length of the list is ${this.length}`)
    }
    let currentIndex = 0
    let current = this.header
    while(currentIndex < index) {
      current = current.next
      ++ currentIndex
    }
    return current
  }
  findPrevious(index) {
    if (index > this.length -1 ) {
      throw new Error(`out of space, the length of the list is ${this.length}`)
    }
    let currentIndex = 0
    let current = this.header
    while(currentIndex < index - 1) {
      current = current.next
      ++ currentIndex
    }
    return current
  }
  get(index) {
    let current = this.header
    let currentIndex = 0
    while(currentIndex < index) {
      current = current.next
      ++ currentIndex
      if (currentIndex > this.length - 1) {
        throw new Error(`out of space, the length of the list is ${this.length}`)
      }
    }
    return current.data
  }
  insert(index, data) {
    const previousNode = this.findPrevious(index)
    const current = this.find(index)
    const newNode = new LinkedListNode(data)
    previousNode.next = newNode
    newNode.next = current
  }
  // 默认删除第一个匹配到的节点
  remove(data) {
    if (this.length === 0) {
      throw new Error('the list is empty')
    }
    const dataIndex = this.indexOf(data)
    if (dataIndex === -1) {
      console.error(`the list do not includes ${data}`)
      return
    }
    const current = this.find(dataIndex)
    const previousNode = this.findPrevious(dataIndex)
    previousNode.next = current.next
  }
  valueToArray() {
    const value = []
    let current = this.header
    while(current !== null) {
      value.push(current.data)
      current = current.next
    }
    return value
  }
}

const list1 = new LinkedList()
list1.add(1)
list1.add(2)
list1.add(3)
list1.insert(1, 4)
console.log(list1.valueToArray())
list1.remove(2)
console.log(list1.valueToArray())