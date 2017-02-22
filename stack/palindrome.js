'use strict'

var Stack = require('./stack.js')


function isPalindrome(word) {
  var s = new Stack()
  for(var i=0; i<word.length; i++){
    s.push(word[i])
  }

  var rword = ''

 while (s.dataStore.length > 0) {
  rword += s.pop()
 }

  if(word === rword) {
    return true
  } else {
    return false
  }
}

var w = 'noon'
console.log(isPalindrome(w))

w = 'noob'
console.log(isPalindrome(w))