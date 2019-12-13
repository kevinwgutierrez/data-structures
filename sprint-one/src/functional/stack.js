var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // create variable for recent index
  var recentIndex = 0;
  // create variable for oldest index
  var oldestIndex = 0;

  // Implement the methods below
  // add string to top of the stack
  someInstance.push = function(value) {
    // setting value to s
    storage[recentIndex] = value;
    console.log((storage[recentIndex] = value));
    recentIndex++;
  };
  // remove and return string from the top of stack
  someInstance.pop = function() {
    // lower most recent index
    recentIndex--;
    // create var to return top of stack
    let top = storage[recentIndex];
    // delete prop at index
    delete storage[recentIndex];
    // return top of stack
    return top;
  };
  // return the size of the stack
  someInstance.size = function() {
    if (recentIndex < 0) {
      return 0;
    } else {
      return recentIndex;
    }
  };
  return someInstance;
};
