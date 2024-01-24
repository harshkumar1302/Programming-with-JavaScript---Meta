// Shallow Copy

let obj1 = {
    name: "harsh",
    age: 25
}

let hero = obj1;
hero.name = "Dheeru";
console.log(obj1);
console.log(hero);

// Deep Copy

let obj2 = {
    name: "harsh",
    age: 25
}

let hero1 = { ...obj1 };
hero1.name = "Dheeru";
console.log(obj2);
console.log(hero1);