function hasTargetSum(arr, target) {
  const numSet = new Set();
  for (let num of arr) {
    const mathCheck = target - num;
    if (numSet.has(mathCheck)) {
      return true;
    }
    numSet.add(num);
  }
  return false;
}

/* 
  O(n) since it depends on the array length (looping through it)
*/

/* 
  variable to check if set works with a variable that checks if array has numbers that works
  for loop to run through array elements
  variable to do math to check if array has elements that === target
  if else to use first variable to check math variable thingy
  return true if yes return false if naw
*/

/*
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
