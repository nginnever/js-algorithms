'use strict'

var node = {}
var tree = {}
var root = 0

console.log(tree)
console.log('insert 10')
insert(10)
console.log(tree)
console.log('insert 14')
insert(14)
console.log(tree)

function insert(num) {
  if(tree === {}) {
    root = num
    tree.num = {
      parent: null,
      rchild: null,
      lchild: null    
    }
    return
  }

  if(root)
  for(var i=0; i<tree.length; i++) {
    if(num < tree[i].val) {
      tree[i].lchild = num
    }
  }

}