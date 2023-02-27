// function that accepts an array
// finds the biggest sum by adding n consecutive array values
// return null if empty

// solution of O(n^2)
function maxSubarraySum(arr: number[], sum: number) {
  if (sum > arr.length) {
    return null;
  }
  let max: number = -Infinity;
  for (let i = 0; i < arr.length - sum + 1; i++) {
    //  0 < 3
    //  1 < 3
    //  2 < 3
    console.log("looped");
    // sum storage
    let tempStorage: number = 0;
    for (let j = 0; j < sum; j++) {
      tempStorage += arr[i + j];
      //   [0+0],[0+1],[0+2] =>0,4,5
    }
    if (max < tempStorage) {
      max = tempStorage;
    }
  }
  return max;
}

maxSubarraySum([3, 4, 5, 5, 5], 3);
