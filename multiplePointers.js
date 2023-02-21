//accept sorted array of integers and find pair where their sum is zero.

//O(n^2) solution
function sumZero(nums) {
  nums = nums.sort();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === 0) {
        return `${nums[i]} and  ${nums[j]}`;
      }
    }
  }
  return false;
}

console.log(sumZero([2, 3, 4, -2]));
