var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.recentIndex = 0;
  this.oldestIndex = 0;
  this.storage = {};
};

// create functions

// unqueue function
Queue.prototype.enqueue = function(string) {
  this.storage[this.recentIndex] = string;
  this.recentIndex++;
};

// dequeue function
Queue.prototype.dequeue = function() {
  var returnString = this.storage[this.oldestIndex];
  delete this.storage[this.oldestIndex];
  this.oldestIndex++;
  return returnString;
};
// size function
Queue.prototype.size = function() {
  if (this.recentIndex - this.oldestIndex < 0) {
    return 0;
  } else {
    return this.recentIndex - this.oldestIndex;
  }
};
