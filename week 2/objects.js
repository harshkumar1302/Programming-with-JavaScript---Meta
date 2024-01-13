// D O T   N O T A T I O N

var user = {};

// example 1

var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
};
console.log(assistantManager.specialAbility);


// example 2

var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}

console.log(table.priceUSD);


// example 3

var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}
console.log(house);
house.windows = 8;  // this adds a new property to an existing object
console.log(house)

// to add a property to any object we put variableName: varibaleValue, but when we add the property and its value
// outside of an object we have to write it as variableName = varibaleValue;

var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

console.log(house2);
house2.windows = 15;
console.log(house2);
house2.windows = 6; // we can also update the value of the objects properties
console.log(house2)



// B R A C K E T S   N O T A T I O N
// With the brackets notation, I can add space characters inside property names, like this:
// I can both access and update properties on objects using either the dot notation, or the brackets 
// notation, or a combination of both

var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car);

car["number of doors"] = 4;
console.log(car)

car["2022"] = 1901;   // doing this is discouraged
console.log(car);



var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
console.log(drone.color);
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]);
}


var myArray = [1, 2, 3, 4, 5, 6, 7];
console.log(myArray);
console.log(myArray.join(' '));
console.log(myArray.join('-'))

for (var i = 0; i < myArray.length; i++) {
    // console.log(i);
    console.log(myArray[i]);
}




var car = {};

car.color = "red";

car.turnKey = function () {
    console.log('engine running');
}




var clothes = [];
clothes.push('gray t-shirt');
clothes.push('green scarf');
clothes.pop();
clothes.push('slippers');
clothes.pop();
clothes.push('boots');
clothes.push('old jeans');
console.log(clothes);
console.log(clothes.length);