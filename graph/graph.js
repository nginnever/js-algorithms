'use strict'

function Vertex(label) {
  this.label = label;
}

function Graph(v) {
  this.vertices = v
  this.edges = 0
  this.adj = []
  this.marked = []
  this.edgeTo = []
  this.pathTo = pathTo
  this.hasPathTo = hasPathTo
  for(var i=0; i<this.vertices; i++){
    this.adj[i] = []
    this.adj[i].push("")
    this.marked[i] = false
  }

  this.addEdge = addEdge
  this.toString = toString
  this.showGraph = showGraph
  this.dfs = dfs
  this.bfs = bfs
}

function addEdge(v, w) {
  this.adj[v].push(w)
  this.adj[w].push(v)
  this.edges++
}

function showGraph() {
 for (var i = 0; i < this.vertices; ++i) {
   console.log(i + " -> ");
   for (var j = 0; j < this.vertices; ++j) {
    if (this.adj[i][j] != undefined)
      console.log('-- '+this.adj[i][j]);
   }
   //print();
 }
}

function dfs(v) {
  var self = this
  this.marked[v] = true
  if(this.adj[v] !== undefined) {
    console.log('visited vertex: '+v)
  }
  if(typeof(v) === "string") {
    return
  }

  this.adj[v].forEach(function(vertex) {
    if(!self.marked[vertex]) {
      self.dfs(vertex)
    }
  })
}

function bfs(s) {
 var self = this
 var queue = [];
 this.marked[s] = true;
 queue.push(s); // add to back of queue
 while (queue.length > 0) {
 var v = queue.shift(); // remove from front of queue
 if (v == undefined) {
 console.log("Visited vertex: " + v);
 }
 if(v === '') {
  continue
 }
 self.adj[v].forEach(function(w) {
 if (!self.marked[w]) {
 self.edgeTo[w] = v;
 self.marked[w] = true;
 queue.push(w);
 }
 })
 }
}

function pathTo(v) {
 var source = 0;
 if (!this.hasPathTo(v)) {
 return undefined;
 }
 var path = [];
 for (var i = v; i != source; i = this.edgeTo[i]) {
 path.push(i);
 }
 path.push(s);
 return path;
}
function hasPathTo(v) {
 return this.marked[v];
}

var g = new Graph(5)
g.addEdge(0,1)
g.addEdge(0,2)
g.addEdge(1,3)
g.addEdge(2,4)
g.showGraph()
//g.dfs(0)
//g.bfs(0)

var vertex = 4;
var paths = g.pathTo(vertex);
while (paths.length > 0) {
 if (paths.length > 1) {
   console.log(paths.pop() + '-');
 }
 else {
   console.log(paths.pop());
 }
}