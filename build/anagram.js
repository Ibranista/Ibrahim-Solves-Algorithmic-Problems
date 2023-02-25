"use strict";
function anagram(first, second) {
    let obj1 = {};
    let obj2 = {};
    let str1;
    let str2;
    first.map((values) => (str1 = values));
    second.map((values) => (str2 = values));
    let splitted1 = str1.split("");
    let splitted2 = str2.split("");
    for (let items of splitted1) {
        obj1[items] = (obj1[items] || 0) + 1;
    }
    for (let items of splitted2) {
        obj2[items] = (obj2[items] || 0) + 1;
    }
    for (let key in obj1) {
        if (!(key in obj2)) {
            return false;
        }
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
anagram(["first"], ["another"]);
function anagramChecker(arr1, arr2) {
    arr1.split("").sort().join("") === arr2.split("").sort().join("")
        ? console.log(true)
        : console.log(false);
}
console.log(anagramChecker("cda", "adc"));
function anagramChecker2(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let lookUp = {};
    for (let letter of arr1) {
        lookUp[letter] = (lookUp[letter] || 0) + 1;
    }
    for (let letter of arr2) {
        if (!lookUp[letter]) {
            return false;
        }
        lookUp[letter] -= 1;
    }
    return true;
}
console.log("lookup: ", anagramChecker2("c", "bc"));
