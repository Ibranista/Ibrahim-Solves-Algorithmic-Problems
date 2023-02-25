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

// console.log(sumZero([2, 3, 4, -2]));

// O(n) solution with out nested loop

function sumZeroRefactored(nums) {
  nums = nums.sort((a, b) => a - b);
  console.log("sorted: ", nums);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === 0) {
      return "found";
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return "nothing found";
}

console.log(sumZeroRefactored([3, 4, 5, 6, -2, 3, -4]));
