class LinkedList {
  length = 0;
  head = null;

  add(value) {
    if (this.head) {
     let current = this.head;

     while (current.next) {
      current = current.next;
     }

     current.next = new Node(value);
    } else {
      this.head = new Node(value);
    }
    this.length++;

    return this.length;
  }

  search(index) {
    let count = 0;
    let current = this.head;

    while(count < index) {
      current = current.next;
      count++;
    }

    return current.value;

  }

  remove() {

  }
}

class Node {
  next = null

  constructor(value) {
     this.value = value;
  }
}

const li = new LinkedList();