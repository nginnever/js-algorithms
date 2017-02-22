'use strict'

var Queue = require('./queue.js')

// 91, 46, 85, 15, 92, 35, 31, 22
// the first pass of the radix sort results in the following bin configuration:
// Bin 0:
// Bin 1: 91, 31
// Bin 2: 92, 22
// Bin 3:
// Bin 4:
// Bin 5: 85, 15, 35
// Bin 6: 46
// Bin 7:
// Bin 8:
// Bin 9:
// Now the numbers are sorted based on which bin they are in:
// 91, 31, 92, 22, 85, 15, 35, 46
// Next, the numbers are sorted by the 10s digit into the appropriate bins:
// Bin 0:
// Bin 1: 15
// Bin 2: 22
// Bin 3: 31, 35
// Bin 4: 46
// Bin 5:
// Bin 6:
// Bin 7:
// Bin 8: 85
// Bin 9: 91, 92
// Finally, take the numbers out of the bins and put them back into a list, and you get the
// following sorted list of integers:
// 15, 22, 31, 35, 46, 85, 91, 92

function distribute(nums, queues, n, digit) {
   for (var i = 0; i < n; ++i) {
     if (digit == 1) {
      queues[nums[i]%10].enqueue(nums[i]);
     }
     else {
      queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
     }
   }
}

function collect(queues, nums) {
  var i = 0;
  for (var digit = 0; digit < 10; ++digit) {
    while (!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue();
    }
  }
}

function dispArray(arr) {
 for (var i = 0; i < arr.length; ++i) {
   console.log(arr[i] + " ");
 }
}
// main program
var queues = [];
for (var i = 0; i < 10; ++i) {
  queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; ++i) {
 nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log("Before radix sort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log("\n\nAfter radix sort: ");
dispArray(nums);