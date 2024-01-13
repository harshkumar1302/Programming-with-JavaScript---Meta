// Learn about the working of var, let and const
/* 
variable declarations using var are hoisted to the top of their containing scope during the compilation phase. 
This means that, regardless of where the var declaration appears in the code, the declaration is moved to the top of the 
scope, while the assignment remains in its original position. This behavior is often referred to as "hoisting."
*/
console.log(hello);//this logs output undefined because of hoisting. At this point hello is been declared in an global scope but not assigned any value.
var hello;
hello = 10;
console.log(hello);

// we cannot log it before declaration cuz of let's own block scope in this it does not hoist helloOne on the top of 
// code like var but we can access it before it's initialization as be default it is given the value of undefined.
// we use it were we want to change the value of variable but do not wanna declare it again 
let helloOne;
console.log(helloOne);
helloOne = 29;
console.log(helloOne);



// but in const it is a type of strict way of writibg code, here you have to declare and initialize the variable in 
// the same line at the same time or it will give an error
// we use const in that condition were we do not want to change the value of an certain variable to change

const helloTwo = 308;
console.log(helloTwo);


function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};
meal(dog);
meal(dog);

console.log(dog.food);


