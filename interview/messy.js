'use strict'

var Heap = require('heap')

var test = [8, 14, 1, 47, 44, 1000, 99, 100, 1400, 1399]
console.log(test)

//console.log(insertionSort(test))

console.log(heapSort(test, 2))

function insertionSort(Arr) {
  for(var i=0; i<Arr.length-1; i++) {
    var x = Arr[i]
    var j = i-1
    while(j>=0 && Arr[j] > x) {
      Arr[j+1] = Arr[j]
      j--
      Arr[j+1] = x
    }
  }
  return Arr
}

// x=8
// j=-1
// exit while
// Arr[0] = 8

// x=14
// j=0
// 8>14 false
// exit while

//[8, 14, 1, 47, 44, 1000, 99, 48, 1400, 1337]

// x=1
// j=1
// 14 > 1 true
// Arr[2] = 14
// j=0
// Arr[1] = 1
// 8 > 1 true
// Arr[1] = 8
// j=-1
// Arr[0] = 1
// exit while

//[8, 1, 14, 47, 44, 1000, 99, 48, 1400, 1337]
//[1, 8, 14, 47, 44, 1000, 99, 48, 1400, 1337]

function heapSort(Arr, k) {
  var slider = k+1
  var n = Arr.length
  var newArr =[]

  var heap = new Heap((a,b) => {
    return a-b
  })

  for(var i=0; i<=k; i++) {
    heap.push(Arr[i])
  }

  for(var j=k+1; j<n; j++){
    Arr[j-(k+1)] = heap.pop()
    heap.push(Arr[j])
  }

  for(var z=0; z<k+1; z++) {
    Arr[(n-(k+1)) + z] = heap.pop()
  }
  
  return Arr
}

// for j=3; j< 10, 10--
// Arr[0] = 1
// heap push(Arr[3] = )
// for j=4; 4<10
// Arr[1] = 8