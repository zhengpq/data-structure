class LinkedListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.header = null
  }
  add(data) {
    const current = this.header
    const newNode = new LinkedListNode(data)
    if (current === null) {
      this.header = newNode
      return
    }
    while(current.next !== null) {
      current = current.next
    }
    current.next = newNode
  }
  find(data) {
    const current = this.header
    let result = false
    while(current.next !== null) {
      result = data === current.data
    }
    return result
  }
  size() {
    let size = 0
    const current = this.header
    
  }
  get(index) {
  }
  insert(index, data) {}
  remove() {}
}

const list1 = new LinkedList()
list1.add('1')