'use strict'

const Tree = require('./tree.js')
const Node = require('./node.js')

var tree = new Tree('one')

tree._root.children.push(new Node('two'))
tree._root.children[0].parent = tree

tree._root.children.push(new Node('three'))
tree._root.children[1].parent = tree

tree._root.children.push(new Node('four'))
tree._root.children[2].parent = tree
 
tree._root.children[0].children.push(new Node('five'))
tree._root.children[0].children[0].parent = tree._root.children[0]
 
tree._root.children[0].children.push(new Node('six'))
tree._root.children[0].children[1].parent = tree._root.children[0]
 
tree._root.children[2].children.push(new Node('seven'))
tree._root.children[2].children[0].parent = tree._root.children[2]

//console.log(tree)

// tree.dfs(function(node){
//   console.log(node.data)
// })

// tree.bfs(function(node){
//   console.log(node.data)
// })

// tree.contains(function(node){
//   if(node.data==='three') {
//     console.log(node)
//     return
//   }
// }, tree.bfs)

tree.add('three.five', 'three', tree.bfs)

console.log(tree.maxDepthBFS())

tree.contains(function(node){
  if(node.data==='three') {
    console.log(node)
    //return
  }
  if(node.data==='three.five') {
    console.log(node)
    //return
  }
}, tree.bfs)
