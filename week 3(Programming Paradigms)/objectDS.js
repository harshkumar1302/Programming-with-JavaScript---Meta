// Working with Objects in JavaScript
// convert an object to an array using forEach()

const result = [];
const drone = {
    speed: 100,
    color: "Yellow"
}
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
    result.push(key, drone[key])
})
console.log(droneKeys)
console.log(result)


// Working with Map

/*
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion").set(2, "The Runner-up").set(3, "The Third place")
console.log(bestBoxers);
*/

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The Third place");
console.log(bestBoxers);

// get();
console.log(bestBoxers.get(1));