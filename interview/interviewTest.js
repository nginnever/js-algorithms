//The "Award Budget Cuts" Problem

//The awards committee had planned to give n research grants this year, out of a its total yearly budget.
//However, the budget was reduced to b dollars. The committee members has decided to affect the minimal number of highest grants, by applying a maximum cap c on all grants: every grant that was planned to be higher than c will now be c dollars.
//Help the committee to choose the right value of c that would make the total sum of grants equal to the new budget.

//Given an array of grants g and a new budget b, explain and code an efficient method to find the cap c. Assume that each grant is unique.
//Analyze the time and space complexity of your solution.

function findC(g, b) {
   // first sort the grants and get total
   // nlogn time
   g.sort(function compareNumbers(a, b) {
    return b - a;
   })
   console.log(g)
   var total = 150
   var neededCuts = total-b
   var runningTotal = 0
   
   for(var i=0; i<g.length; i++){
      var currentMax = g[i]
      if((g[i] - g[i+1]) >= neededCuts){
         return g[i] - neededCuts
      }
      console.log('current max: '+currentMax)
      console.log('difference: '+ (g[i] - g[i+1]))
            
      runningTotal += (g[i] - g[i+1])*(i+1)
      console.log('runningTotal: '+ runningTotal)
      console.log('----')

      if(runningTotal >= neededCuts){
         return (g[0]-g[i])+Math.floor(((runningTotal-neededCuts)/(i+1)))+1
      }
      
      // reduce max to next max or new budget, recursive
      // reduce 54 -> 32 += 18 of 30 needed
      // needs 12 more
      // reduce 32 -> 23 += 2x(9) = 18 above what is needed, c is above next max 
      // and below current max
   }
   
}
var grants = [23, 12, 54, 10, 32, 19] // 150 total
            //[23, 12, 27, 10, 27, 19] = 
var budget = 10

var test = Object.create(null)
Object.defineProperty(test, 'testwr', {
 writable: true,
 configurable: true,
 //enumerable: true,
 value: 4
})
console.log(test.testwr)
//console.log(findC(grants, budget))