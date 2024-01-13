// mine code 

for (var i = 1; i < 3; i++) {
    for (var j = 1; j < 6; j++) {
        console.log("week", i, "day", j);
    }
}

// coursra code 

for (var i = 1; i <= 2; i++) {
    for (var j = 1; j <= 5; j++) {
        console.log("week", i, "day", j);
    }
}


// display the summer months for 2 years

for (var year = 2024; year < 2026; year++) {
    console.log(year);
    for (months = 4; months < 8; months++) {
        console.log("----------", months);
    }
}

var names = 'Sachindra';
console.log(names.length);  // to check the length of the given string / array or we can say this counts the letters in it
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);  // here names[i]  it prints a single letter which equal to the number provided
} // the counting starts from 0 in any given array


var i = 7;
if (i <= 5) {
    console.log("Hello");
} else if (i <= 10) {
    console.log("Goodnight");
} else {
    console.log("Goodbye");
}


// var names = typeof "harsh";

// console.log(names);

// let name1 = 'alice',
//     name2 = 'bob';

// let result = name1 < name2;
// console.log(result);


let f1 = 'apple',
    f2 = 'Banana';

let result = f2.toLowerCase() < f1.toLowerCase();
console.log(result); 