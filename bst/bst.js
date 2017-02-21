'use strict'

var Node = function() {
  this.data = null
  this.lchild = {}
  this.rchild = {}
}

var getNewNode = function(data) {
  var node = new Node()
  node.data = data
  return node
}

var tree = {}
tree = insert(tree, 2)
console.log(tree)
tree = insert(tree, 4)
console.log(tree)
tree = insert(tree, 1)
console.log(tree)
tree = insert(tree, 3)
console.log(tree)
tree = insert(tree, 6)
console.log(tree)
tree = insert(tree, 5)
console.log(tree)

console.log(search(tree, 7))

function insert(tree, data) {
  if(tree.data === undefined) {
    tree = getNewNode(data)
    return tree
  }

  if(data < tree.data) {
    tree.lchild = insert(tree.lchild, data)
  } 
  if(data > tree.data){
    tree.rchild = insert(tree.rchild, data)
  }

  return tree
}

function search(tree, data) {
  //base cases
  if(tree.data === undefined) {return false}
  if(tree.data === data) {return true}

  if(data < tree.data){
    return search(tree.lchild, data)
  }

  if(data > tree.data) {
    return search(tree.rchild, data)
  }
}