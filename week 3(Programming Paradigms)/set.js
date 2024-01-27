// no errors would be thrown and no updates would be made to an set 

const house1 = "red";
const house2 = "red";
const house3 = "blue";
const houses = new Set();
houses.add(house1).add(house2).add(house3);
console.log(houses);



const fruits = ["apple", "banana", "mango", "apple", "kiwi", "apple"]
const uniqueFruits = new Set(fruits);
console.log(uniqueFruits)