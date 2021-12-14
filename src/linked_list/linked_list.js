export class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  traverse() {
    let result = [];
    let p = this.head;
    if (!p) return result;
    while (p) {
      result.push(p.element);
      p = p.next;
    }
    return result;
  }

  // 队尾追加元素
  append(el) {
    const newNode = new Node(el);
    // 单向链表，不支持尾插法
    // 1.若链表为空(头指针指向 null)
    if (!this.head) {
      this.head = newNode;
    } else {
      let p = this.head;
      while (p.next) {
        p = p.next;
      }
      p.next = newNode;
    }
    this.length++;
  }

  // 中间插入元素
  insert(pos, el) {
    // 1.判断是否越界
    if (pos < 0 || pos > this.length) return false;
    // 2.创建新的节点
    const newNode = new Node(el);
    // 3.插入元素
    if (pos === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let index = 0;
      let q = null;
      let p = this.head;
      while (index++ < pos) {
        q = p;
        p = p.next;
      }
      q.next = newNode;
      newNode.next = p;
    }
    this.length++;
    return true;
  }

  get(pos) {
    if (pos < 0 || pos > this.length - 1) return null;
    // 查找该位置的元素
    let index = 0;
    let p = this.head;
    while (index++ < pos) {
      p = p.next;
    }
    return p.element;
  }

  indexOf(el) {
    let index = 0;
    let p = this.head;
    // 开始查找
    while (p) {
      if (p.element === el) {
        return index;
      }
      index++;
      p = p.next;
    }
    return -1;
  }

  removeAt(pos) {
    if (pos < 0 || pos > this.length - 1) return null;
    // 开始移动至对应位置
    let index = 0;
    let q = null;
    let p = this.head;
    // 若删除的元素是第一个元素
    if (pos === 0) {
      this.head = p.next;
    } else {
      while (index++ < pos) {
        q = p;
        p = p.next;
      }
      q.next = p.next;
    }
    this.length--;
    return p.element;
  }

  update(pos, el) {
    // 1.删除pos位置的元素
    const result = this.removeAt(pos);
    // 2.插入el到对应位置
    this.insert(pos, el);
    // 返回被更新的原元素
    return result;
  }

  remove(el) {
    const index = this.indexOf(el);
    if (index === -1) return;
    this.removeAt(index);
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
}
