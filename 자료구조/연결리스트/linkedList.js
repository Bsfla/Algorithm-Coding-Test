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

  #search(index) {
    let count = 0;
    let current = this.head;
    let prev;

    while (count < index) {
      prev = current;
      current = current.next;
      count++;
    }

    return [prev, current];
  }

  search(index) {
    const [current] = this.#search(index);

    return current.value;
  }

  remove(index) {
    const [prev, current] = this.#search(index);

    if (prev && current) {
      prev.next = current.next;
      this.length--;
      return this.length;
    }

    if (current) {
      this.head = current.next;

      this.length--;

      return this.length;
    }
  }
}

class Node {
  next = null;

  constructor(value) {
    this.value = value;
  }
}

const li = new LinkedList();

li.add(1);
li.add(2);
li.add(3);
li.add(4);
li.add(5);
li.add(6);

console.log(li.search(1));
