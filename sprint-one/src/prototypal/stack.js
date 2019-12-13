var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var object = Object.create(stackMethods);
  object.count = 0;
  object.storage = {};
  return object;
};

stackMethods = {
  pop: function() {
    this.count--;
    var returnStr = this.storage[this.count];
    delete this.storage[this.count];

    return returnStr;
  },
  push: function(string) {
    this.storage[this.count] = string;
    this.count++;
  },
  size: function() {
    if (this.count < 0) {
      return 0;
    } else {
      return this.count;
    }
  }
};
