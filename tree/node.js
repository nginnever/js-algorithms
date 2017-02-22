'use strict'

function Node(data) {
  this.data = data
  this.parent = null
  this.children = []
}

module.exports = Node