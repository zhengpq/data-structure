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
  get(index) {

  }
  size() {}
  insert(index, data) {}
  remove() {}
}