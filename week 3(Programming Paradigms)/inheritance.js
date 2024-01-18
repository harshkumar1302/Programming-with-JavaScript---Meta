// In JavaScript, it is possible to build inheritance using the object create method. 
// It's probably better to use class syntax for more complex objects and inheritance. 


// Example 1
var bird = {
    canFly: true,
    hasWings: true,
    hasFeathers: true
}

var eagle1 = Object.create(bird);
console.log(eagle1);
console.log("eagle 1 has wings:", eagle1.hasWings);
console.log("eagle 1 can fly:", eagle1.canFly);
console.log("eagle 1 has Feathers:", eagle1.hasFeathers);

var eagle2 = Object.create(bird);
console.log(eagle2);
console.log("eagle 2 has wings:", eagle2.hasWings);
console.log("eagle 2 can fly:", eagle2.canFly);
console.log("eagle 2 has Feathers:", eagle2.hasFeathers);

var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log(penguin1);
// here by using template litrals you can understand that the value true is also getting passed as a string
console.log(`penguin 1 has wings: ${penguin1.hasWings}`);
console.log("penguin 1 can fly:", penguin1.canFly);
console.log("penguin 1 has Feathers:", penguin1.hasFeathers);



//  Example 2

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }

    toggleLights() {
        this.lightsOn = !this.lightsOn
    }

    lightsStatus() {
        console.log("Are lights On ?", this.lightsOn);
    }
    getStatus() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var myFirstTrain = new Train("Red", true);
console.log(myFirstTrain);
var mySecondTrain = new Train("Blue", true);
var myThirdTrain = new Train("Green", false);
console.log(mySecondTrain);
console.log(myThirdTrain);
var train4 = new Train("Darkred", true);
train4.toggleLights();
train4.lightsStatus();
train4.getStatus();
train4.getPrototype();

// now we are going to add a class using inheritance to understand its concept
// here we will use extends to inherite the properties from super-class or base class

class HighSpeedtrain1 extends Train {
    constructor(passenger, highSpeed, color, lightsOn) {
        super(color, lightsOn);
        this.passenger = passenger;
        this.highSpeed = highSpeed;
    }
    toggleHighSpeed() {
        this.highSpeed = !this.highSpeed;
        console.log("High speed Status:", this.highSpeed)
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus()
        if (this.lightsOn) {
            console.log("Lights are 100% functional.");
        } else {
            console.log("Lights are not working!");
        }
    }

}

var train5 = new Train("Orange", false);
train5.toggleLights();
train5.lightsStatus();
var highSpeed1 = new HighSpeedtrain1(150, false, "Red", false)
highSpeed1.toggleHighSpeed();
highSpeed1.toggleLights();
train5.getPrototype();
highSpeed1.getPrototype();


// Example 3

class StationaryBike {
    constructor(position, gears) {
        this.position = position;
        this.gears = gears;
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position;
        this.modes = modes;
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs;
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8);
        this.treadmill = new Treadmill(treadmillPos, 5);
    }
}

var boxingGym = new Gym("07:00 - 22:00", "Right Corner", "Left Corner");
console.log(boxingGym.openHrs);
console.log(boxingGym.stationaryBike);
console.log(boxingGym.treadmill);