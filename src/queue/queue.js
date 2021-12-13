export class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

/**
 * 击鼓传花
 * @param {} nameList 玩游戏的人名列表
 * @param {*} num 传到何值，谁出队
 * @returns
 */
export function passGame(nameList, num) {
  // 创建队列
  const queue = new Queue();
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  // 循环让这些人进入到队列中
  while (queue.size() > 1) {
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();
  }

  // 返回最后留下来的人
  return queue.front();
}
