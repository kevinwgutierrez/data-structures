var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

// create functions

// unqueue function
Stack.prototype.push = function(string) {
  this.storage[this.count] = string;
  this.count++;
};

// dequeue function
Stack.prototype.pop = function() {
  this.count--;
  var returnString = this.storage[this.count];
  delete this.storage[this.count];
  return returnString;
};
// size function
Stack.prototype.size = function() {
  if (this.count < 0) {
    return 0;
  } else {
    return this.count;
  }
};
