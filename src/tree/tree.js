class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 1. insert(key) 向二叉搜索树中插入一个新的键
  insert(key) {
    // 1. 根据key创建Node节点
    const newNode = new Node(key);
    // 2. 判断原来的树是否为一棵空树
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.key > node.key) {
      // 当前节点的右子树为空，则直接插入右子树
      if (node.right === null) {
        node.right = newNode;
      } else {
        // 否则，递归进入右子树
        this.insertNode(node.right, newNode);
      }
    } else {
      // 当前节点的左子树为空，则直接插入左子树
      if (node.left === null) {
        node.left = newNode;
      } else {
        // 否则，递归进入左子树
        this.insertNode(node.left, newNode);
      }
    }
  }

  // 先序遍历
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root);
  }

  preOrderTraverseNode(node) {
    if (node === null) {
      return;
    }
    console.log(node.key); // 先序访问结点
    this.preOrderTraverseNode(node.left);
    this.preOrderTraverseNode(node.right);
  }

  // 中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root);
  }

  inOrderTraverseNode(node) {
    if (node === null) {
      return;
    }
    this.inOrderTraverseNode(node.left);
    console.log(node.key);
    this.inOrderTraverseNode(node.right);
  }

  // 后序遍历
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root);
  }

  postOrderTraverseNode(node) {
    if (node === null) {
      return;
    }
    this.postOrderTraverseNode(node.left);
    this.postOrderTraverseNode(node.right);
    console.log(node.key);
  }

  // 获取最小值，沿着左子树访问到终点
  min() {
    let node = this.root;
    while (node.left !== null) {
      node = node.left;
    }
    return node.key;
  }

  // 求取最大值，沿着右子树访问到终点
  max() {
    let node = this.root;
    while (node.right !== null) {
      node = node.right;
    }
    return node.key;
  }

  // 查找某个值是否在二叉搜索树中
  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    // 递归出口
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      // 待查找的key值小于当前节点，则必定在当前节点的左子树中
      return this.searchNode(node.left, key);
    } else if (key > node.key) {
      // 待查找的key值大于当前节点，则必定在当前节点的右子树中
      return this.searchNode(node.right, key);
    } else {
      return true; // key === node.key 说明已找到
    }
  }

  search2(key) {
    let node = this.root;
    while (node !== null) {
      if (key < node.key) {
        node = node.left;
      } else if (key > node.key) {
        node = node.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // *** 二叉搜索树的删除操作 ***
  remove(key) {
    // 1. 找到要删除的节点
    let current = this.root;
    let parent = null;
    let isLeftChild = true;
    // 2. 开始查找要删除的节点
    while (current.key !== key) {
      parent = current;
      if (key < current.key) {
        isLeftChild = true;
        current = current.left;
      } else {
        isLeftChild = false;
        current = current.right;
      }
      if (current === null) return false;
    }
    // 找到节点 情况1 删除的节点是叶子节点(度为0的情况)
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        // 搜索树只有一个根节点
        this.root = null;
      } else if (isLeftChild) {
        // 决定是删除左孩子还是右孩子
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    // 情况2 删除的节点只有一个左子节点(度为1的情况)
    else if (current.right === null) {
      if (current === this.root) {
        this.root = current.left;
      } else if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    }
    // 情况2 删除的节点只有一个右子节点
    else if (current.left === null) {
      if (current === this.root) {
        this.root = current.right;
      } else if (isLeftChild) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    }
    // *** 情况3 删除的节点有两个子节点 最为复杂的情况 ***
    else {
      // 1. 获取后继节点
      let successor = this.getSuccessor(current);
      // 2. 判断是否根节点
      if (this.root === current) {
        this.root = successor;
      } else if (isLeftChild) {
        parent.left = successor;
      } else {
        parent.right = successor;
      }
      successor.left = current.left;
    }
    return true;
  }

  // 获取指定节点的后继
  getSuccessor(delNode) {
    // 1. 定义变量，存储临时节点
    let successorParent = delNode;
    let successor = delNode;
    let current = delNode.right;
    // 2. 寻找节点
    while (current !== null) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }
    // 3. 如果后继节点不是待删除节点的右节点
    if (successor !== delNode.right) {
      successorParent.left = successor.right;
      successor.right = delNode.right;
    }
    return successor;
  }
}
