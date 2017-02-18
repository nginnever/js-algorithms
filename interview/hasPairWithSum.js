'use strict'

function hasPair(sum, list) {
  var p1 = 0
  var p2 = list.length - 1

  function recurse() {
    if(p1 === p2) {
      return false
    }
    var tempSum = list[p1] * list[p2]
    if(tempSum === sum) {
      console.log('found a pair!')
      return true
    }
    if(tempSum < sum) {
      p1++
    } else {
      p2--
    }
    return recurse()
  }

  return recurse()
}

var arr = [1, 4, 5, 6, 8]
console.log(hasPair(12, arr))

var obj = {
  test: null
}

console.log('---')
console.log(obj.hasOwnProperty('tests'))