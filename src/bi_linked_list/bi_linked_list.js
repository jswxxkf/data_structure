import { Node, LinkedList } from '../linked_list/linked_list';

class BiNode extends Node {
  constructor(el) {
    super(el);
    this.prev = null;
  }
}

export class BiLinkedList extends LinkedList {
  constructor() {
    super();
    this.tail = null;
  }

  // override
  append(el) {
    const newNode = new BiNode(el);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 双向链表，直接采用尾插法
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  insert(pos, el) {
    if (pos < 0 || pos > this.length) return false;
    // 创建Node
    const newNode = new BiNode(el);
    // 判断多种插入的情况
    if (pos === 0) {
      // 插入位置为0，且原先没有元素
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (pos === this.length) {
      // 插入到最后位置
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      let index = 0;
      let q = null;
      let p = this.head;
      while (index++ < pos) {
        q = p;
        p = p.next;
      }
      q.next = newNode;
      newNode.prev = q;
      newNode.next = p;
      p.prev = newNode;
    }
    this.length++;
    return true;
  }

  removeAt(pos) {
    if (pos < 0 || pos > this.length - 1) return null;
    let p = this.head;
    if (pos === 0) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
    } else if (pos === this.length - 1) {
      p = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    } else {
      let index = 0;
      let q = null;
      while (index++ < pos) {
        q = p;
        p = p.next;
      }
      q.next = p.next;
      p.next.prev = q;
    }
    this.length--;
    return p.element;
  }
}
