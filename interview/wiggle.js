'use strict'

var input = [1,2,3,4,5,6,7,8,9]

isWiggleSequence(input)

function isWiggleSequence(input) {
  var sign
  var currSign
  var currentSum = 0
  var maxSum=0

  for(var i=0; i<input.length;i++) {
    var temp = input[i] - input[i-1]
    console.log(temp)
    if(sign === Math.sign(temp)) {
      console.log(sign+ ' ----')
      maxSum = Math.max(maxSum, currentSum)
      currentSum = 0
    } else {
      console.log('sign: '+sign)
      currentSum++
    }
    maxSum = Math.max(maxSum, currentSum)
    sign = Math.sign(temp);
  }

  console.log('max sum: '+maxSum)
}