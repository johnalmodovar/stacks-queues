/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = null;
  size = 0;

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    if (this.top !== null) newNode.next = this.top;
    this.top = newNode;
    this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) throw new Error("Stack is empty");
    const temp = this.top.val;
    this.top = this.top.next;
    this.size -= 1;
    return temp;
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    if (this.size === 0) throw new Error("Stack is empty");

    return this.top.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
