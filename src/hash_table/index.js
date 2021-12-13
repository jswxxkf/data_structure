import { hashFunc, HashTable } from './hash_table.js';

// console.log(hashFunc('name', 11));
// console.log(hashFunc('age', 11));
// console.log(hashFunc('gender', 11));
// console.log(hashFunc('jio', 11));
// console.log(hashFunc('cup', 11));

const hashTable = new HashTable();
// hashTable.put('name', 'why');
// hashTable.put('age', '18');
// hashTable.put('height', '1.88');
// hashTable.put('address', 'china');
// hashTable.put('age', '20');
//
// console.log(hashTable.storage);
//
// console.log(hashTable.get('abc'))
// console.log(hashTable.get('age'))
// console.log(hashTable.get('name'))
//
// console.log(hashTable.remove('age'));
// console.log(hashTable.isEmpty());
// console.log(hashTable.size());

hashTable.put('aaa', 111);
hashTable.put('bbb', 111);
hashTable.put('ccc', 111);
hashTable.put('ddd', 111);
hashTable.put('eee', 111);
console.log(hashTable.limit + '个限制');
console.log(hashTable.storage);
hashTable.put('mmm', 222);
console.log(hashTable.limit + '个限制');
console.log(hashTable.storage);
