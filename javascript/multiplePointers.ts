//accept sorted array of integers and find pair where their sum is zero.

//O(n^2) solution
function sumZero(nums: any[]) {
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

function sumZeroRefactored(nums: any[]) {
  nums = nums.sort((a, b) => a - b);
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

sumZeroRefactored([3, 4, 5, 6, -2, 3, -4]);

// countUniqueValues
// function that accepts an array and count number of unique values

function countUniqueValues(num: number[]) {
  let uniqueStorage: { [key: number]: number } = {};
  for (let values of num) {
    if (!uniqueStorage[values]) {
      uniqueStorage[values] = 1;
    }
  }
  let values: string[] = [];
  for (let uniques in uniqueStorage) {
    values.push(uniques);
  }

  return values;
}

countUniqueValues([2, 3, 3, 5, 5, 5]);

// using two pointers

function countUsingPointers(num: number[]) {
  let first: number = 0;
  let second: number = first + 1;

  while (second < num.length) {
    if (num[first] !== num[second]) {
      num[first + 1] = num[second];
      first += 1;
    }
    second += 1;
  }
  num.length = first + 1;
  return num;
}

countUsingPointers([2, 2, 3]);
