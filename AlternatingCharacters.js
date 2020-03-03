// You are given a string containing characters A and B only. Your task is to change it into a 
// string such that there are no matching adjacent characters. 
// To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// For example, given the string s = AABAAB, remove an A at positions 0 and 3 to 
// make  s = ABAB in 2 deletions.

const altChars = s => {
  let deletions = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      deletions++;
    }
  }
  return deletions;
}

const result = altChars('AABAAB');

console.log(result);


// let result = 0;
 
//      if (s.length >= 1 && s.length <= 100000) {
//           let arr = s.split('');
//           let past = arr[0];
          
//           arr = arr.filter((item, key) => {
//                if (item !== past && key !== 0) {
//                     past = item;
//                     return item; 
//                }  
//           });
//           result = s.length - [ s.charAt(0), ...arr ].length;
//      }
     
//      return result; 