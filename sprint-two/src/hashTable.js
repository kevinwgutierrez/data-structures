var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // gets index from input key
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check if there is a bucket already
  if (this._storage.limitedArray.get(index) === undefined) {
    // if there isnt already a bucket, create bucket
    var bucket = [];
    // intialize array containing key/value, then push array to bucket
    bucket.push([k, v]);
    // if there is already a bucket at index
  } else {
    // iterate through the bucket
    for (var i = 0; i < this.limitedArray[index].length; i++) {
      // check if existing key already exists in bucket
      if (this.storage[index][i][0] === k) {
        // if existing key exists, overwrite the prop w/ input key/value
        this.storage[index][i] = [k, v];
      }
    }
  }
  // call this._storage.set(index, v)
  // assigns the input value to the hashed index on storage array
  //
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check if bucket at index exists
  // if index exists, check if bucket has tupples (length more than 0)
  if (
    this._storage.storage[index] !== undefined &&
    this._storage.storage[index].length > 0
  ) {
    // if bucket exists at index loop through bucket
    for (var i = 0; i < this._storage.storage[index].length; i++) {
      // check if current iterations key matches input key
      if (this._storage.storage[index][i][0] === k) {
        // return the corresponding value within the tupple if the key is found
        return this._storage.storage[index][i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check if bucket at index exists
  // if index exists, check if bucket has tupples (length more than 0)
  if (
    this._storage.storage[index] !== undefined &&
    this._storage.storage[index].length > 0
  ) {
    // if bucket exists at index loop through bucket
    for (var i = 0; i < this._storage.storage[index].length; i++) {
      // check if current interations key matches input key
      if (this._storage.storage[index][i][0] === k) {
        // remove the corresponding tupple if the key is found
        delete this._storage.storage[index][i];
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
