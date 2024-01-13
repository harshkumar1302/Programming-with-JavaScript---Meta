//this is a simple way to write numbers in an order 

console.log(1);
console.log(2);
console.log(3);

// using loop helps us in saving time of repeateadly doing console log and also makes code shorter

for (var i = 1; i < 5; i++) {
    console.log(i);
}

// race start prompt using for loop

// increment
for (var i = 1; i <= 3; i++) {
    console.log(i);
}
console.log("Go");

// decriment 

for (var i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Happy Birthday!");


// new year prompt using while loop
var counter = 4;
while (counter > 0) {
    console.log(counter);
    counter = counter - 1;
}
console.log("Happy New Year!");