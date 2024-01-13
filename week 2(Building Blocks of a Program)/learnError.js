// Error Handling

// try and catch method and throw keyword

try {
    console.log(a + b);
} catch (err) {
    // console.log(err);
    console.log('the code is still running');
}



var letters = 'a,b,c';
var hello = letters.match(/a/);
console.log(hello);





function addTwoNums(a, b) {
    try {
        if (typeof (a) !== 'number') {
            throw new ReferenceError('the first argument is not a number');
        } else if (typeof (b) !== 'number') {
            throw new ReferenceError('the second argument is not a number');
        } else {
            console.log(a + b);
        }
    } catch (err) {
        console.log("Error!", err);
    }
}
addTwoNums(5, "5");
console.log("It still works");


var result = null;
console.log(result);


try {
    console.log('Hello');
} catch (err) {
    console.log('Goodbye');
}

try {
    throw new Error();
    console.log('Hello');
} catch (err) {
    console.log('Goodbye');
}


var str = "Hello";
str.match("jello");