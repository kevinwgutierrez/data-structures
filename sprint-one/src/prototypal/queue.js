var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var object = Object.create(queueMethods);
  object.storage = {};
  object.recentIndex = 0;
  object.oldestIndex = 0;
  return object;
};

// create functions
var queueMethods = {
  // put new string in queue at beginning
  enqueue: function(string) {
    // set the most recent index to the value passed in
    this.storage[this.recentIndex] = string;
    // increase the recent index
    this.recentIndex++;
  },
  // remove the last (oldest) element from the queue & return
  dequeue: function() {
    // create return string variable for the value of last prop
    var returnStr = this.storage[this.oldestIndex];
    // remove the last prop from object
    delete this.storage[this.oldestIndex];
    // increment the oldest Index
    this.oldestIndex++;
    // return the element that got removed from object
    return returnStr;
  },
  size: function() {
    if (this.recentIndex - this.oldestIndex < 0) {
      return 0;
    }
    return this.recentIndex - this.oldestIndex;
  }
};
