import { Stack, dec2bin } from './stack';

const stack = new Stack();

stack.push('abc');
stack.push('cba');
stack.push('npc');
stack.push('mba');

console.log(stack.items);
console.log(stack.pop());
console.log(stack.items);
console.log(stack.peek());

console.log(stack.isEmpty());
console.log(stack.size());

console.log(dec2bin(1000));
console.log(dec2bin(100));
console.log(dec2bin(10));
