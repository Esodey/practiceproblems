// Mark and Jane are very happy after having their first child. Their son loves toys, 
// so Mark wants to buy some. There are a number of different toys lying in front of him,
//  tagged with their prices. Mark has only a certain amount to spend, 
// and he wants to maximize the number of toys he buys with this money.

// Given a list of prices and an amount to spend, what is the maximum number of 
// toys Mark can buy? For example, if prices = [1,2,3,4] and Mark has k = 7 to spend, he can buy 
// items [1,2,3] for 6, or [3,4] for 7 units of currency. He would choose the first group of 3 items.

function maximumToys(prices, k) {
  let sum = 0;
  let sorter = prices.sort((a, b) => a - b);
  let counter = 0;

  for (var i = 0; i < sorter.length; i++) {
      if (sorter[i] < k) {
          sum += sorter[i];
          if (sum <= k) {
              counter++;
          } else {
              break;
          }
      }
  }
  return counter;
}

// sort them first so you can just take the first count of items that is less than or equal to k

