var set1Arr = [0, 1, 2];
var set2Arr = [3, 4, 5];
var set3Arr = [6, 7, 8, 9];

console.log(set1Arr);
console.log(set2Arr);
console.log(set3Arr);
var finalArr = [set1Arr.join(''), set2Arr.join(''), set3Arr.join('')]

var horizontalArr = finalArr;
console.log(horizontalArr.join(""));


function displayVertical(virtArr) {
    for (var i = 0; i < virtArr.length; i++) {
        console.log(virtArr[i]);
    }
}


displayVertical(finalArr.join(''));



var value = Math.min(1, 5, 9, 0);
console.log(value);


var myName = 'Harsh';
console.log(myName.length); // used to count the length of any string or array.
console.log(myName.charAt(1)); // To read each individual character at a specific index in a string, starting from zero, I can use the charAt() method
console.log("Wo".concat("rl").concat("d")); // he concat() method joins two strings
console.log(myName.indexOf("s"));  // The indexOf returns the location of the first position that matches a character
console.log(myName.lastIndexOf("h")); // The lastIndexOf finds the last match, otherwise it works the same as indexOf
console.log("ho-ho-ho".split("-"));     // The split method chops up the string into an array of sub-strings
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

