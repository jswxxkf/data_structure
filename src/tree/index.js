import { BinarySearchTree } from "./tree.js";

const bst = new BinarySearchTree();

bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);

// console.log(bst);
// console.log(bst.preOrderTraverse());
// console.log(bst.inOrderTraverse());  // sorted
// console.log(bst.postOrderTraverse());
// console.log(bst.min());
// console.log(bst.max());
// console.log(bst.search(11));
// console.log(bst.search2(11));
console.log(bst.remove(15));
bst.inOrderTraverse();
