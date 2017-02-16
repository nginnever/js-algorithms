'use strict'

// O(n) = n

// creates an array of fibonaci sequence up num elements

//var array = []

function fibonacci(num) {
  console.log(num)
  if (num <= 1) {
    // todo investigate the time complexity of .push()
    //array.push(num)
    return 1
  }
  
  return fibonacci(num - 1) + fibonacci(num - 2)
}

fibonacci(144)