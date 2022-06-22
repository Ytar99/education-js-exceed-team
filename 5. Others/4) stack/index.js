class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }

  push(elem) {
    this.stack = [...this.stack, elem];
    this.size += 1;
    return this;
  }

  pop(elem) {
    if (this.isEmpty()) throw new Error('Stack is empty!');

    this.stack = this.stack.slice(0, this.stack.length - 1);
    this.size -= 1;
    return this;
  }

  print() {
    return '[' + this.stack.join(', ').trim() + ']';
  }

  isEmpty() {
    return this.size === 0;
  }
}

window.Stack = Stack;

export default Stack;
