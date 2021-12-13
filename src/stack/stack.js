export class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

export function dec2bin(num) {
  // 1. 创建stack
  const stack = new Stack();

  // 2. 循环取余
  while (num > 0) {
    const remainder = num % 2;
    num = Math.floor(num / 2);
    stack.push(remainder);
  }

  // 3. 逆序拼接
  let binString = '';
  while (!stack.isEmpty()) {
    binString += stack.pop();
  }

  return binString;
}
