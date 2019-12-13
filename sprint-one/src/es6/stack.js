class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
  }
  push(string) {
    this.storage[this.count] = string;
    this.count++;
  }
  pop() {
    this.count--;
    var returnVal = this.storage[this.count];
    delete this.storage[this.count];
    return returnVal;
  }
  size() {
    if (this.count < 0) {
      return 0;
    } else {
      return this.count;
    }
  }
}
