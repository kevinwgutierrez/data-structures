class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.recentIndex = 0;
    this.oldestIndex = 0;
    this.storage = {};
  }

  // enqueue(string) method: adds a string to back of queue
  enqueue(string) {
    this.storage[this.recentIndex] = string;
    this.recentIndex++;
  }
  // dequeue() : remove and return string at front of queue
  dequeue() {
    var returnString = this.storage[this.oldestIndex];
    delete this.storage[this.oldestIndex];
    this.oldestIndex++;
    return returnString;
  }
  // size() : return the number of items in queue
  size() {
    if (this.recentIndex - this.oldestIndex < 0) {
      return 0;
    } else {
      return this.recentIndex - this.oldestIndex;
    }
  }
}
