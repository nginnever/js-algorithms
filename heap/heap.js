'use strict'

// node at parent
//  - left child is at 2p+1
//  - right child is at 2p+2

// node at child
//  - parent is at math.floor((c-1)/2)

//                8
//        ________|_______
//        18            29
//     ___|___        ___|___
//    20      28      39    66
//  __|__    __|__  __|__
//  37  26   76 32  74 89

var arr = [8, 18, 29, 20, 28, 29, 66, 37, 24, 76, 32, 74, 89]

insert(arr, 10)

// insert takes the height of the tree steps time to complete
// with log2n level to the tree this is O(log2n) time
function insert(arr, num) {
  console.log('Heap')
  console.log(arr)
  console.log('inserting: '+num)
  arr.push(num)
  console.log(arr)

  var childPos = arr.length-1
  var parentPos = Math.floor((arr.length-1)/2)
  var child = arr[childPos]
  var parent = arr[parentPos]

  console.log('child: '+child)
  console.log('child position: '+childPos)
  console.log('parent: '+parent)
  console.log('parent position: '+parentPos)

  recurse()

  function recurse() {
    if(child >= parent){
      return arr
    }
    console.log('Child is less than parent, swapping...')
    arr[childPos] = parent
    arr[parentPos] = child
    console.log('new array')
    console.log(arr)

    childPos = parentPos
    console.log('new child: '+child)
    console.log('new child position: '+childPos)

    parentPos = Math.floor((parentPos-1)/2)
    parent = arr[parentPos]
    console.log('new parent: '+parent)
    console.log('new parent position: '+parentPos)


    return recurse(child, parent)
  }
}

insert(arr, 7)

// function delete() {

// }

