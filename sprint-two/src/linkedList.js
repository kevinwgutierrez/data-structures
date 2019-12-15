var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // add value to end of list (constant)
  list.addToTail = function(value) {
    let node = new Node(value);
    // check if list head is empty
    if (!this.head) {
      // if list head is null, set head and tail to value
      this.head = node;
      this.tail = this.head;
      // if head is not null:
    } else {
      // set the current tail's next to the input node
      this.tail.next = node;
      // set the current tail to input node
      this.tail = node;
    }
  };

  // remove from beginning of list (constant)
  list.removeHead = function() {
    // check if there is a head
    if (this.head) {
      var returnHead = this.head.value;
      this.head = this.head.next;
      return returnHead;
      // make the next value the new head
      // delete ??
    }
  };

  // check if target is within list (linear)
  list.contains = function(target) {
    var node = this.head;
    // start with beginning of list (head)
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;

    // ///
    // var checkNode = function(node) {
    //   // set variable for object at next to be
    //   var node = this.head;
    //   // if value at current node is the target return true
    //   if (node.value === target) {
    //     return true;
    //     // if not then recursively call checkNode
    //   } else {
    //     checkNode(node);
    //   }
    //   // if target not found in list, return false
    //   return false;
    // };
    // checkNode(target);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
