"use strict";
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
function sumZeroRefactored(nums) {
    nums = nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === 0) {
            return "found";
        }
        else if (sum > 0) {
            right--;
        }
        else {
            left++;
        }
    }
    return "nothing found";
}
sumZeroRefactored([3, 4, 5, 6, -2, 3, -4]);
function countUniqueValues(num) {
    let uniqueStorage = {};
    for (let values of num) {
        if (!uniqueStorage[values]) {
            uniqueStorage[values] = 1;
        }
    }
    let values = [];
    for (let uniques in uniqueStorage) {
        values.push(uniques);
    }
    return values;
}
countUniqueValues([2, 3, 3, 5, 5, 5]);
function countUsingPointers(num) {
    let first = 0;
    let second = first + 1;
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
