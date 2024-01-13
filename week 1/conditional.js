// Driving test results calculator
// if else statement

var results = 50;
if (results > 40) {
    console.log("Hurray! You passed the test")
} else {
    console.log("Better luck next time")
}

// check weather the food is hot
// if, else if, else statement 

var food = "hot";
if (food == "hot") {
    console.log("Too hot")
} else if (food == "cold") {
    console.log("Too cold")
} else {
    console.log('Just Right')
}


// one more example for if, else if, else

var position = 'first';
if (position == 'first') {
    console.log("Gold Medal");
} else if (position == 'second') {
    console.log("Silver Medal");
} else if (position == 'third') {
    console.log("Bronze Medal");
} else {
    console.log("No Medals")
}


// switch statement
var position = 'second';
switch (position) {
    case 'first':
        console.log("Gold medal");
        break;
    case 'second':
        console.log("Silver medal");
        break;
    case 'third':
        console.log("Bronze medal");
        break;
    default:
        console.log("No medals");
        break;
}


var age = 10;
if (age >= 65) {
    console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary");
} else if (age < 18) {
    console.log("You get an allowance");
} else {
    console.log("The value of the age variable is not numerical");
}
