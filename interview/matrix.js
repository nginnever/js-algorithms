function verifyDiags(matrix) {
  // check for sparse matrices, dense only
  
  for(var i=1; i< matrix.length; i++) {
    if(matrix[i].length !== matrix[i-1].length){
       return new Error('invalid matrix')
    }
    for(var j=1; j<matrix[i].length; j++) {
      var curr = matrix[i][j]
    
      if(curr !== matrix[i-1][j-1]){
        return false
      }
    } 
  }
  return true
}

var m = [
[1,2,3],
[0,1,2],
[3,0,1]]

console.log(verifyDiags(m))