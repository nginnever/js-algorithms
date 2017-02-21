'use strict'

// finds the longest unique substring of characters
// in an array

var test ='abcabcbbccccdababbacde'
console.log(findMaxSubLength(test))
// 5

test = 'bbbbb'
console.log(findMaxSubLength(test))
// 1

test = 'pwwkew'
console.log(findMaxSubLength(test))
// 3

function findMaxSubLength(string) {
  var hashMap = {}
  var max = 0
  var pointer = 0

  for(var i=0; i<string.length; i++) {
    if(hashMap.hasOwnProperty(string[i])){
      max=Math.max(i-pointer, max)
      pointer=i
      hashMap = {}
    }

    if(string[i+1] === undefined && !hashMap.hasOwnProperty(string[i])){
      max=Math.max((i+1)-pointer, max)
    }
    
    hashMap[string[i]] = string[i]
  }
  return max
}

// i=0
// hashmap = a ? false
// add a to hash hashMap

// i=1
// hashMap = b ? false
// add b to hashMap

// i=2
// hashMap = c ? false
// add c to hashMap

// i=3
// hashMap = a ? true
// max = 

