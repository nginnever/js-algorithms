'use strict'

var Stack = require('./stack.js')


function isPalindrome(word) {
  var s = new Stack()
  for(var i=0; i<word.length; i++){
    s.push(word[i])
  }

  var rword = ''

  for(var j=0; j<word.length; j++) {
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