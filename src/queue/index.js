import { Queue, passGame } from './queue';

const queue = new Queue();

queue.enqueue('abc');
queue.enqueue('cba');
queue.enqueue('npc');
queue.enqueue('mba');

console.log(queue.items);
console.log(queue.dequeue());
console.log(queue.items);

console.log(passGame(['why', 'tom', 'lily', 'lucy'], 3));
