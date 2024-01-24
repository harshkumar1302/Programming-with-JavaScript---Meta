// We cannot use For OF in an object directly as it is not iterable

// const car = {
//     name: "ferrari",
//     color: "yellow"
// }
// for (prop of car) {
//     console.log(prop);  // this will throw an error showing car is not iterable
// }


// const colors = ["red", "blue", "yellow"];
// for (var color of colors) {
//     console.log(color);
// }

// // Some Built in methods
// // 1. Object.keys() 2. Object.values() 3. Object.entries()
// const car1 = {
//     name: "ferrari",
//     color: "yellow",
//     speed: 200
// }

// console.log(Object.keys(car1));
// console.log(Object.values(car1));
// console.log(Object.entries(car1));



// // Example 01
// //  loop over any object's own property keys and values

// var clothingItem = {
//     price: 50,
//     color: 'beige',
//     material: 'cotton',
//     season: 'autumn'
// }

// for (const key of Object.keys(clothingItem)) {
//     console.log(key, ":", clothingItem[key])

// }


// // Example 02

// function testBracketsDynamicAccess() {
//     var dynamicKey;
//     if (Math.random() > 0.5) {
//         dynamicKey = "speed";
//     } else {
//         dynamicKey = "color";
//     }

//     var drone = {
//         speed: 15,
//         color: "purple"
//     }

//     console.log(drone[dynamicKey]);
// }

// testBracketsDynamicAccess();

// Example 03
const car = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sports car object: ", sportsCar);

for (prop in sportsCar) {
    console.log("😭", prop);
}
console.log("In for-in It itrate over object AND its prototype!");
console.log("Where as in for-of we itrate over objects OWN properties");

for (prop of Object.keys(sportsCar)) {
    console.log(prop + ":", sportsCar[prop]);
}