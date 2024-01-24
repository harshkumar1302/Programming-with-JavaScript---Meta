
// // understanding destructuring

// let { PI } = Math;
// console.log(PI);


// // Example 01

// const arr = [1, 2, 3, 4, 5];
// let [num1, num2, num3, num4, num5] = arr;
// console.log(num1, num2, num3);
// console.log(num1, num2, num3, num4, num5);

// // Example 02

// const alphabet = ["Q", "W", "E", "R", "T", "Y",];
// const numbers = [3, 4, 5, 6, 7, 8];

// // let [a, b] = alphabet;
// // let [a, , c] = alphabet;
// let [a, b, ...rest] = alphabet
// console.log(a, rest);

// // let newArray1 = alphabet.concat(numbers);
// // console.log(newArray1);
// let newArray = [...alphabet, ...numbers]; // Its does the same as above so we should use this instead of the above one
// console.log(newArray);


// // Example 03

// function sumAndMultiply(a, b) {
//     return [a + b, a * b];
// }

// const [sum, multiply] = sumAndMultiply(5, 2);
// console.log(sum, multiply);


// // Example 04

// const obj = { a: 1, prop2: 0, prop3: 78 };
// let { prop1, prop2, prop3 } = obj;
// console.log(prop1, prop2, prop3);


// // Example 05

// const user = {
//     name: "Harsh",
//     company: "XYZ",
//     age: 45
// }

// let { name, age } = user;
// console.log(name, age);

// console.log(Object.entries(user));



// // Example 06

// const personOne = {
//     name: "Harsh",
//     age: 25,
//     address: {
//         city: "Somewhere",
//         state: "One of them"
//     }
// }

// const personTwo = {
//     name: "Suman",
//     age: 26
//     address: {
//         city: "Somewhere else",
//         state: "Another one of them"
//     }
// }


// const { name = "Guju", age, favFood = "Rice", address: { state }, } = personTwo
// console.log(name, age, favFood, state);

// const { name, ...rest } = personOwo;
// console.log(rest)



// // Example  07
// // Storing the properties of person 1 and person 2 in a new object
// // here we can see that properties of object 1 is overridden by object 2
// const personOne = {
//     name: "Harsh",
//     age: 25,
//     address: {
//         city: "Somewhere",
//         state: "One of them"
//     }
// }

// const personTwo = {
//     name: "Suman",
//     age: 26
// }

// const personThree = { ...personOne, ...personTwo };
// console.log(personThree);

// // function printUser(user) {
// //     // console.log(user);
// //     console.log(`My Name is: ${user.name}, age = ${user.age}.`)
// // }
// // printUser(personOne);

// function printUser({ name, age, favFood = "Roti" }) {
//     // console.log(user);
//     console.log(`My Name is: ${name}, age = ${age}. My fav food is ${favFood}.`)
// }
// printUser(personOne);



// // Example 08

// const person = {
//     name: "Harsh",
//     age: 25,
//     profession: "Programmer"
// }
// // Instead of this

// console.log(person.name);
// console.log(person.age);

// // Use this 👍
// let { name, age } = person;
// console.log(name, age);