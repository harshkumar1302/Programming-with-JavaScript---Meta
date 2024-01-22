class Animal {
    constructor(color = 'Yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if (this.energy > 0) {
            this.energy -= 20;
            console.log("Energy is decreasing it's currently at:", this.energy);
        } else if (this.energy == 0) {
            this.sleep();
        }
    }
    sleep() {
        this.energy += 10;
        console.log("Energy is restoring, currently it's at:", this.energy);
    }
    getColor() {
        console.log(this.color);
    }
}

class Cat extends Animal {
    constructor(sound = "Purr", canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "Meow", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        } else {
            console.log(this.houseCatSound);
        }
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        } else {
            console.log(this.tigerSound);
        }
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound, canFly, color, energy) {
        super(sound, canFly, color, energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}


var fiji = new Parrot(false);
var polly = new Parrot(true);

fiji.makeSound();
fiji.makeSound(true);

polly.makeSound();
polly.makeSound(true);

console.log(polly.color);
console.log(polly.energy);

console.log(polly.isActive());

var penguin = new Bird("shriek", false, "black and white", 200);
console.log(penguin);

console.log(penguin.sound);
console.log(penguin.canFly);
console.log(penguin.color);
console.log(penguin.energy);
console.log(penguin.isActive());

var leo = new HouseCat();


leo.makeSound(false);

leo.makeSound(true);

var cuddles = new Tiger();
cuddles.makeSound(false);
cuddles.makeSound(true); 