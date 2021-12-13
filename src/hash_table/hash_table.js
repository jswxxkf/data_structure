/**
 * str: 传入的待哈希化的字符串
 * max: 定义的哈希表长度（最好是一个质数）
 * */
export function hashFunc(str, max) {
  // 1. 定义hashCode
  let hashCode = 0;
  // 2. 霍纳算法
  for (let i = 0; i < str.length; i++) {
    hashCode = 31 * hashCode + str.charCodeAt(i);
  }
  hashCode = hashCode % max;
  return hashCode;
}

const MAX_LOAD_FACTOR = 0.75; // 最大装填因子，超过需扩容再哈希
const MIN_LOAD_FACTOR = 0.25; // 最小装填因子，低于需缩减容量再哈希

export class HashTable {
  constructor() {
    this.storage = []; // 数组存储元素
    this.count = 0; // 当前存放了多少个元素
    this.limit = 7; // 最大可以存放多少个元素(总个数) 哈希表起始容量
  }

  // 哈希函数
  hashFunc(str, max) {
    // 1. 定义hashCode
    let hashCode = 0;
    // 2. 霍纳算法
    for (let i = 0; i < str.length; i++) {
      hashCode = 31 * hashCode + str.charCodeAt(i);
    }
    hashCode = hashCode % max;
    return hashCode;
  }

  // 放入元素  HashMap -> {K, V} [K不允许重复, 允许null作为K]
  put(key, value) {
    // 1. 先根据key映射到某一下标值
    const index = this.hashFunc(key, this.limit);
    // 2. 取出数组(桶，用于链地址法解决冲突)
    let bucket = this.storage[index];
    if (bucket === undefined) {
      bucket = [];
      this.storage[index] = bucket;
    }
    // 3. Key是否重复(判断是插入还是修改操作)
    let overridden = false;
    // 3.1 遍历桶，取出桶中元组
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        // 3.2 Key重复则覆盖
        tuple[1] = value;
        overridden = true;
      }
    }
    // 4. 如果没有覆盖,则为新增
    if (!overridden) {
      bucket.push([key, value]);
      this.count++;
      // 判断是否需要扩容
      if (this.count > this.limit * MAX_LOAD_FACTOR) {
        let newLimit = this.limit * 2;
        newLimit = this.getPrime(newLimit);
        this.resize(newLimit);
      }
    }
  }

  // 根据key获取value
  get(key) {
    // 1. 根据key获取index
    const index = this.hashFunc(key, this.limit);
    // 2. 获取bucket
    const bucket = this.storage[index];
    if (bucket === undefined) {
      return null;
    }
    // 3. 遍历bucket,一个个查找
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }
    return null;
  }

  // 根据key删除元素,返回被删除元素的value,若没找到返回null
  remove(key) {
    // 1. 根据key获取index
    const index = this.hashFunc(key, this.limit);
    // 2. 获取bucket
    const bucket = this.storage[index];
    if (bucket === undefined) {
      return null;
    }
    // 3. 遍历bucket,
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1); // 注意splice方法的第二个参数,为1删除 为0新增,且原地修改数组
        this.count--;
        // 判断是否需要缩小容量
        if (this.limit > 8 && this.count < this.limit * MIN_LOAD_FACTOR) {
          let newLimit = Math.floor(this.limit / 2);
          newLimit = this.getPrime(newLimit); // 17 => 11
          this.resize(newLimit);
        }
        return tuple[1];
      }
    }
  }

  // 判断是否为空
  isEmpty() {
    return this.count === 0;
  }

  // 哈希表存放的元素个数
  size() {
    return this.count;
  }

  // 哈希表扩(缩)容 + 再哈希化
  resize(newLimit) {
    // 1. 保存旧数组中的内容
    let oldStorage = this.storage;
    // 2. 重置属性
    this.limit = newLimit;
    this.storage = [];
    this.count = 0;
    // 3. 取出oldStorage中所有的元素，重新放入storage
    oldStorage.forEach((bucket) => {
      // 3.1 原先桶中元素为空，则无需操作
      if (bucket === null) {
        return;
      }
      for (let i = 0; i < bucket.length; i++) {
        let tuple = bucket[i];
        this.put(tuple[0], tuple[1]);
      }
    });
  }

  // 判断一个数是否为质数
  isPrime(num) {
    // 1. 获取num的平方根
    const temp = Math.ceil(Math.sqrt(num));

    for (let i = 2; i < temp; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  // 找到num的下一个质数
  getPrime(num) {
    while (!this.isPrime(num)) {
      num++;
    }
    return num;
  }
}
