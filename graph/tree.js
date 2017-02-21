'use strict'

const Node = require('./node.js')

function Tree(data) {
  var node = new Node(data)
  this._root = node
}

Tree.prototype.dfs = function(cb) {
  (function recurse(currentNode) {
    for(var i=0; i<currentNode.children.length; i++) {
      recurse(currentNode.children[i])
    }
    cb(currentNode)
  })(this._root)
}

Tree.prototype.bfs = function(cb) {
  //fifo queue
  var queue = []
  queue.push(this._root)
  var currentTree = queue.shift()

  while(currentTree) {
    for(var i=0; i<currentTree.children.length; i++) {
      queue.push(currentTree.children[i])
    }
    cb(currentTree)
    currentTree = queue.shift()
  }

}

Tree.prototype.contains = function(cb, traversal) {
  traversal.call(this, cb)
}

Tree.prototype.add = function(data, toData, traversal) {
  var child = new Node(data)
  var parent = null
  var callback = function(node) {
    if(node.data === toData) {
      parent = node
    }
  }
  this.contains(callback, traversal)

  if(parent) {
    parent.children.push(child)
    child.parent = parent
  } else {
    throw new Error('Cannot add node to a non-existent parent.')
  }
}

Tree.prototype.remove = function(node, parent, cb) {

}

Tree.prototype.maxDepthBFS = function() {
  //fifo queue
  var queue = []
  queue.push(this._root)
  var currentTree = queue.shift()
  var depth = 0

  while(currentTree) {
    ++depth
    for(var i=0; i<currentTree.children.length; i++) {
      queue.push(currentTree.children[i])
    }
    //cb(currentTree)
    currentTree = queue.shift()
  }
  return depth
}

module.exports = Tree
