'use strict'

var table = new hashTable({
  voxelot: {
    name: 'voxelot',
    title:'rank 1 idiot',
    value: 1337 
  },
  Bob: {
    name: 'bob',
    tile: ' some guy',
    value: 420
  }
})
console.log(table.items)
console.log('\nadd key value to hash table: ')
table.setItem('Rahul', {name: 'rahul', title: 'raahhhuuul', value: '-1'})
console.log(table.items)
console.log(table.length)
console.log('\n query the hash table for voxelot')
console.log(table.hasItem('voxelot'))

function hashTable(obj) {
  this.length = 0
  this.items = {}
  for(var p in obj) {
    if(obj.hasOwnProperty(p)) {
      this.items[p] = obj[p]
      this.length++
    }
  }

  this.setItem = function(key, value) {
    var prev = undefined
    if(this.hasItem(key)) {
      prev = this.items[key]
    } else {
      this.length++
    }
    this.items[key] = value
  }

  this.hasItem = function(key) {
    return this.items.hasOwnProperty(key)
  }

  this.removeItem = function(key) {
    if(this.hasItem(key)) {
      var prev = this.items[key]
      delete this.items[key]
      this.length--
      return prev
    } else {
      return undefined
    }
  }

  this.keys = function() {
    var keys = []
    for(var k in this.items) {
      if(this.hasItem(k)) {
        keys.push(k)
      }
    }
    return keys
  }

  this.values = function() {
    var vals = []
    for(var k in this.items) {
      if(this.hasItem[k]) {
        vals.push(this.items[k])
      }
    }
    return vals
  }

  this.each =function(fn) {
    for(var k in this.items) {
      if(this.hasItem(k)) {
        fn(k, this.items[k])
      }
    }
  }

  this.clear = function() {
    this.items = {}
    this.length = 0
  }

}