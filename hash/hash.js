'use strict'

// voxelot's very slow custom hash function

const buckets = 256

function voxHash32() {
  var hash = []
  var word = process.argv[2].split('')
  var hashVal = 0
  function recurse(word) {
    if(word.length === 0) {
      return hash
    }
    hashVal = (127*hashVal+word[word.length - 1].charCodeAt(0)) % 16908799
    hash.push(hashVal)
    word.pop()
    recurse(word)
  }
  recurse(word)
  // compress hash into buckets
  return hash
}

var vhash = voxHash32('test')
console.log(vhash)