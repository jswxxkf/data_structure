import { BiLinkedList } from './bi_linked_list';

const biLinkedList = new BiLinkedList();

biLinkedList.append('aaa');
biLinkedList.append('bbb');
biLinkedList.append('ccc');
biLinkedList.append('ddd');

console.log(biLinkedList.traverse());

biLinkedList.insert(1, 'abc');
biLinkedList.insert(3, 'cba');

console.log(biLinkedList.traverse());

console.log(biLinkedList.get(0));
console.log(biLinkedList.get(2));

console.log(biLinkedList.indexOf('cba'));
console.log(biLinkedList.indexOf('abc'));

console.log(biLinkedList.removeAt(3));
console.log(biLinkedList.traverse());

console.log(biLinkedList.update(1, 'mmm'));
console.log(biLinkedList.traverse());

console.log(biLinkedList.remove('mmm'));
console.log(biLinkedList.traverse());

console.log(biLinkedList.isEmpty());
console.log(biLinkedList.size());
