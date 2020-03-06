// A left rotation operation on an array shifts each of the array's elements 1 unit to the left. 
// For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would 
// become [3,4,5,1,2].

// Given an array a of n integers and a number, d, perform d left rotations on the array.
//  Return the updated array to be printed as a single line of space-separated integers.

function rotLeft(a, d) {
  var arr = a;
  
  for (var j = 1; j <= d; j++) {
      arr.shift(arr.push(arr[0]));
  }
  return arr;
}


//  create a new variable arr to not alter the array input


