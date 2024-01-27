/*
01. Add new members to arrays without using the push() method,
02. Convert a string to an array and
03. Copy either an object or an array into a separate object 
*/

// Join arrays, objects using the rest operator

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']

const fruitsAndBerries = [...fruits, ...berries]
console.log(fruitsAndBerries);


const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = { ...flying, ...car }
console.log(flyingCar)

// 01.

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies)


// 02. 

const greeting = "Hello";
const arrayOfChar = [...greeting];
console.log(arrayOfChar);


// 03. 
const car1 = {
    speed: 100,
    color: "Red"
}

const car2 = { ...car1 }
car1.speed = 207;
console.log(car2.speed, car1.speed)

const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits2, fruits1)
