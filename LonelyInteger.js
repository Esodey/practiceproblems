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