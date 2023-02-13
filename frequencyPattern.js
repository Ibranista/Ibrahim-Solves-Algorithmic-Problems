"strict mode";

// 1. Check if the squared value of the first argument is equal to the second argument
// (n)^2 because it has nested loop.

function squared(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex == -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

squared([2, 3, 4], [4, 9, 156]);

//  (n)

function squared(arr1, arr2) {
  let first = {};
  let second = {};
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let num1 of arr1) {
    first[num1] = (first[num1] || 0) + 1;
  }
  for (let num2 of arr2) {
    second[num2] = (second[num2] || 0) + 1;
  }
  for (let key in first) {
    if (!(key ** 2 in second)) {
      return false;
    }
    // checking number of occurrences
    if (second[key ** 2] !== first[key]) {
      return false;
    }
  }
  return true;
}

// squared([2, 3, 4], [4, 9, 16]);

// similarity check

function checkSimilarity(first, second) {
  let firstStorage = {};
  let secondStorage = {};

  for (let fruit of first) {
    firstStorage[fruit] = (first[fruit] || 0) + 1;
  }
  console.log(firstStorage);
  for (items of second) {
    if (!(items in firstStorage)) {
      return false;
    }
  }
  return true;
}

checkSimilarity(["orange", "cherry"], ["orange", "cherry"]);
