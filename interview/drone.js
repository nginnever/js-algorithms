'use strict'

//You are planning the amount of fuel need to complete a drone flight.
//To fly higher, the drone burns 1 liter of fuel per feet. However, flying lower charges the drone with the amount of energy equivalent to 1 liter of fuel for every feet. Flying sideways takes no energy (only flying up and down takes/charges energy).

//Given an array of 3D coordinates named route, find the minimal amount of fuel the drone would need to fly through this route.
//Explain and code the most efficient solution possible, with the minimal number of actions and variables.

//Example:
//Completing the route [{x:0, y:2, z:10}, {x:3, y:5, z:0}, {x:9, y:20, z:6}, {x:10, y:12, z:15}, {x:10, y:10, z:8}] requires a minimum of 5 liters of fuel.

// First realize that only the z axis is in questison, reduce array to only z
// drone dropping altitude will cancel out any down charge coming back up... starting from inital height
// Only need to compute the diff(maxHeight, initHeight)
// O(n) time complexity 
// O(1) space comlexity

console.log(calcFuelBasic([10,0,6,15,8, 20, 1, 5, 5]))
console.log(calcFuelSimple([10,0,6,15,8]))

function calcFuelBasic(zRoute){
  var litersAdded = 0
  var energyBalance = 0
  for(var i =1; i<zRoute.length-1;i++){
    energyBalance = energyBalance + (zRoute[i-1] - zRoute[i])
    if (energyBalance < 0){
       litersAdded = litersAdded - energyBalance
       energyBalance = 0
     }
  }
   return litersAdded
 }

// just look for the max height after the initial height
 function calcFuelSimple(zRoute){
   var maxHeight = zRoute[0]
   for(var i=1; i<zRoute.length-1;i++){
      if (zRoute[i] > maxHeight)
         maxHeight = zRoute[i]
     }
   return maxHeight - zRoute[0] 
 }