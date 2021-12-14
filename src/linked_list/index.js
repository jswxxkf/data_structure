import { LinkedList } from './linked_list';

const linkedList = new LinkedList();

linkedList.append('aaa');
linkedList.append('bbb');
linkedList.append('ccc');
linkedList.append('ddd');

console.log(linkedList.traverse());

linkedList.insert(1, 'abc');

console.log(linkedList.traverse());

console.log(linkedList.get(3));

console.log(linkedList.indexOf('abc'));
console.log(linkedList.indexOf('cba'));

console.log(linkedList.removeAt(3));
console.log(linkedList.removeAt(1));
console.log(linkedList.traverse());

console.log(linkedList.update(1, 'npc'));
console.log(linkedList.traverse());

linkedList.remove('aaa');
console.log(linkedList.traverse());

console.log(linkedList.isEmpty());
console.log(linkedList.size());
