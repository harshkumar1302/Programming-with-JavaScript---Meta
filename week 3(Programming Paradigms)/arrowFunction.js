// syntax 
() => {
    statement
}

// Understand 
(function (a) {
    return a + 100;
});

// 1. Remove the word "function" and place arrow between the argument and opening body brace
(a) => {
    return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the parameter parentheses
a => a + 100;



// example 01
let square = (parameter) => {
    return parameter ** 2;
}
console.log(square(3));

// example 02
let multiple = (parameter1, parameter2) => {
    return parameter1 * parameter2;
}
console.log(multiple(3, 12));


// example 03
let prompt = function check(word) {
    return word;
}
console.log(prompt("Hello"));

// or // 

let prompt1 = (word) => word;
console.log(prompt1("Hello"));


// example 04
const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

let count = materials.map(function (alphabets) {
    return alphabets.length;
})
console.log(count);

// OR //

console.log(materials.map((alphabets) => alphabets.length));

// Example 05

// method 1 
let sum = (a, b) => a + b + 100;
console.log(sum(56, 44));

// method 2
const a = 3;
const b = 9;
let sum1 = () => a + b + 100;
console.log(sum1());

// method 3
let sum2 = (a = 4, b = 6) => a + b + 100;
console.log(sum2());


// Traditional anonymous function
const prompt0 = function (a, b) {
    const chuck = 42;
    return a + b + chuck;
};
console.log(prompt0(5, 79));

// Arrow function

const testData = (a, b) => {
    const chuck = 56;
    return a + b + chuck;
};
console.log(testData(5, 79));