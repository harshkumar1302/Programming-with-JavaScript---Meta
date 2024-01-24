

let { PI } = Math;
console.log(PI);


const arr = [1, 2, 3, 4, 5];
let [num1, num2, num3, num4, num5] = arr;
console.log(num1, num2, num3);
console.log(num1, num2, num3, num4, num5);



const obj = { a: 1, prop2: 0, prop3: 78 };
let { prop1, prop2, prop3 } = obj;
console.log(prop1, prop2, prop3);



const user = {
    name: "Harsh",
    company: "XYZ",
    age: 45
}

let { name, age } = user;
console.log(name, age);

console.log(Object.entries(user));


const alphabet = ["Q", "W", "E", "R", "T", "Y",];
const numbers = [3, 4, 5, 6, 7, 8];

// let [a, b] = alphabet;
// let [a, , c] = alphabet;
let [a, b, ...rest] = alphabet
console.log(a, rest);

let newArray = [...alphabet, ...numbers];
let newArray1 = alphabet.concat(numbers);
console.log(newArray);
console.log(newArray1);

const person = {
    name: "Harsh",
    age: 25,
    profession: "Programmer"
}
// Instead of this

console.log(person.name);
console.log(person.age);

// Use this 👍
let { name1, age1 } = person;
console.log(name, age);