import { PriorityQueue } from './priority_queue';

const queue = new PriorityQueue();

queue.enqueue('aaa', 100);
queue.enqueue('bbb', 150);
queue.enqueue('ccc', 120);
queue.enqueue('ddd', 90);

queue.items.forEach((item) => {
  console.log(item.element, item.priority);
});

console.log(queue.dequeue());
