'use strict'

function Stack() {
  this.dataStore= []
  this.top=0
  this.push=push
  this.pop = pop
  this.peek=peek
}

function push(element){
  this.dataStore[this.top++] = element
}

function pop(){
  return this.dataStore.pop()
}

function peek() {
  return this.dataStore[this.top-1]
}

module.exports = Stack