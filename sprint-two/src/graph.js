// Instantiate a new graph
var Graph = function() {
  // create new graph object
  this.newGraph = {};
  // create value property for new graph object
  // newGraph.value = value;
  // create an array to hold nodes
  this.nodes = [];
  // return new graph
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var nodes = this.nodes;
  // create node object
  var nodeObj = {};
  // add value to new node
  nodeObj.value = node;
  // create node edges property
  nodeObj.edges = [];
  // add node to graph by pushing into graph nodes array
  this.nodes.push(nodeObj);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // add graph nodes to variable nodes
  var nodes = this.nodes;
  // loop through nodes, check if any values in
  // nodes array equal input node
  nodes.forEach = n => {
    //return n.value === node ? true : false;
    if (n.value === node) {
      return true;
    } else {
      return false;
    }
  };
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // loop through nodes array
  var nodes = this.nodes;
  // if any nodes present that match input node,
  nodes.forEach(function(n) {
    // delete from nodes array
    if (n.value === node) {
      delete n;
    }
  });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check  if both nodes edges array contain eachother
  // loop through each from node's edges
  fromNode.edges.forEach(function(node) {
    // check if each nodes value equals to node
    if (node.value === toNode) {
      return true;
    } else {
      return false;
    }
  });
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // loop through nodes and grab matching nodes
  var nodes = this.nodes;
  nodes.forEach(function(node) {
    // if current node is fromNode
    if (node.value === fromNode) {
      // add toNode to node's edges array
      node.edges.push(toNode);
    }
    // if current node is toNode
    if (node.value === toNode) {
      // add from node to node's edges array
      node.edges.push(fromNode);
    }
  });
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // loop through from edges
  var fromEdges = fromNode.edges;
  fromEdges.forEach(function(edge, i) {
    if (edge === toNode) {
      fromEdges.splice(i, 1);
    }
  });
  // loop through to edges
  var toEdges = toNode.edges;
  toEdges.forEach(function(edge, i) {
    if (edge === fromNode) {
      toEdges.splice(i, 1);
    }
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var nodes = this.nodes;
  nodes.forEach(function(node) {
    node.value = cb(node.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
