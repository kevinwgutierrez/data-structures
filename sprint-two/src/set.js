var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // check if item exists in object
  if (!this._storage.hasOwnProperty(item)) {
    // if it doesn't, add to obj and set value to 1
    this._storage[item] = 1;
    // if not
  } else {
    // if item exists in obj, increment value by 1
    this._storage++;
  }
};

setPrototype.contains = function(item) {
  for (var key in this._storage) {
    if (this._storage.hasOwnProperty(item)) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
