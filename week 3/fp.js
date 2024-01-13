var cur1 = 1000;
var cur2 = 0;
var exc = 1.2;

function convertCurrency(amount, rate) {
    return amount * rate;
}

cur2 = convertCurrency(cur1, exc);
console.log(cur2);



function consoleLog(val) {
    console.log(val)
    return val
}

consoleLog("hello");



function myDay() {
    console.log('Morning');
    console.log('Afternoon');
    console.log('Evening');
    myDay();
}


var counter = 3;
function example() {
    console.log(counter);
    counter = counter - 1;
    if (counter === 0) return;
    example();
}

example();



