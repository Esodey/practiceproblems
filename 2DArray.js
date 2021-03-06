//  Given a 6 x 6 2D array 
    // 1 1 1 0 0 0
    // 0 1 0 0 0 0
    // 1 1 1 0 0 0
    // 0 0 0 0 0 0
    // 0 0 0 0 0 0
    // 0 0 0 0 0 0

//  We define an hourglass in A to be a subset of values with indices falling in this pattern in
//  arr's graphical representation:
    // a b c
    //   d
    // e f g

//  There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglasses' values.
//  Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum.

function hourglassSum(arr) {
  let max = -Infinity;

  for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
          let sum = arr[i + 1][j + 1];
          for (let k = 0; k < 3; k++) {
              sum += arr[i][j + k];
              sum += arr[i + 2][j + k]
          }
          if (sum > max) max = sum;
      }
  }

  return max;
}