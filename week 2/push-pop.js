// push() method = extending any given array

var fruits = [];
fruits.push("apple");
console.log(fruits.join(" "));
fruits.push("mango");
fruits.push("guvava");
console.log(fruits);


// pop()

fruits.pop();
console.log(fruits);



function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}
arrayBuilder(2, 5, 6);
arrayBuilder('hello', 'my', 'friends');


function arrayBuilder1(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
var simpleArr = arrayBuilder1('apple', 'pear', 'plum');
console.log(simpleArr);
var simpleArr1 = arrayBuilder1(13, 'feb', 1999);
console.log(simpleArr1);



console.log(Math.floor(7.5));


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNum = getRandomInt(1, 10);
console.log(randomNum); // Output: A random integer between 1 and 10 (inclusive)
