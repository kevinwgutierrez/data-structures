var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // recent index
  var recentIndex = 0;
  // oldest index
  var oldestIndex = 0;

  // Implement the methods below

  // add string to back of queue
  someInstance.enqueue = function(value) {
    // set new index to input value
    storage[recentIndex] = value;
    // increase most recent index
    recentIndex++;
  };

  // remove and return string at front
  someInstance.dequeue = function() {
    // create variable for return string/which is string at front
    var returnString = storage[oldestIndex];
    // delete the property at the front location
    delete storage[oldestIndex];
    // decrease most oldest index
    oldestIndex++;
    return returnString;
  };

  someInstance.size = function() {
    // return the number of items in queue
    if (recentIndex - oldestIndex < 0) {
      return 0;
    } else {
      return recentIndex - oldestIndex;
    }
  };

  return someInstance;
};
var newQ = Queue();
newQ.size();
