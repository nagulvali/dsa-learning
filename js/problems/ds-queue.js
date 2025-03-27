// Queue

// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element) {
//     this.items.push(element);
//   }

//   dequeue(element) {
//     return this.items.shift(element);
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   peek() {
//     if (!this.isEmpty()) return this.items[0];
//     return null;
//   }

//   size() {
//     return this.items.length;
//   }
//   print() {
//     console.log(this.items.toString());
//   }
// }

// queue = new Queue();

// console.log(queue.isEmpty());
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// queue.print();
// console.log(queue.dequeue(10));
// console.log(queue.peek());
// queue.print();

// the above problem has built in shift method used for array has O(n) time complexity which is not favourable
// we can optimize this bit, ensuring both enqueue and dequeue both has constant time complexity

class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue(element) {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(`rear: ${this.rear}`);
    console.log(`front: ${this.front}`);
    console.log(this.items);
  }
}

queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.print();
console.log(queue.dequeue(10));
console.log(queue.dequeue(20));
console.log(queue.peek());
queue.print();
