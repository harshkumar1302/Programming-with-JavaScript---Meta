class Car {
    constructor(color, maxSpeed) {
        this.color = color;
        this.maxSpeed = maxSpeed;
    }

    turboOn() {
        console.log('Turbo is turned ON!')
    }
}

const car1 = new Car("red", 56);
const car2 = new Car("blue", 52)
const car3 = new Car("green", 51)
const car4 = new Car("yellow", 45)
const car5 = new Car("orange", 22)
car1.turboOn();
car2.turboOn();



//    Polymorphism Example using class

// Example 1
const bicycle = {
    bell: function () {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function () {
        return "Ring, ring! Come here, please!"
    }
}

function ringTheBell(thing) {
    console.log(thing.bell())
}
ringTheBell(bicycle);
ringTheBell(door);


// Example 2
class Food {
    todayLunch() {
        console.log("Its Lunch Time!");
    }
}

class Noon extends Food {
    todayLunch() {
        super.todayLunch()
        console.log("Its time for - Rice, Dal and Sabji.");
    }
}

class Drink extends Food {
    todayLunch() {
        console.log("Water");
    }
}

var toEat = new Noon();
var toDrink = new Drink();
toEat.todayLunch();
toDrink.todayLunch();