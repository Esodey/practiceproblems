// You will be given an array of integers. All of the integers except one occur twice. 
// That one is unique in the array.

// Given an array of integers, find and print the unique element.

// For example, a = [1,2,3,4,3,2,1], the unique element is 4.


function lonelyinteger(a) {
  let freqCounter = {}, i;

  for (i = 0; i < a.length; i++) {
      let num = a[i];
      freqCounter[num] = !freqCounter[num];
  }

  for (let nums in freqCounter) {
      if (freqCounter[nums]) {
          return Number(nums);
      }
  }
  return null;
}