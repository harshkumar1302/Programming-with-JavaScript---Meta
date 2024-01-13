'' // single quotes
"" // double quotes

// "+" used with string is called concatenation operator

"inter" + "net" // "internet"
"note" + "book" // "notebook"

365 + " days" // "365 days"
12 + " months" // "12 months"

/*
1 + "2"
What will be the result of 1 + "2" ?
Note that the value of 1 is of the number data type, 
and the value of "2" is of the string data type, and so JavaScript will coerce the number 1 to a string of "1",
and then concatenate it with the string of "2", so the result is a string of "12". 
*/


var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri);

// we can avoid code by using addition assignment operator, as follow 
var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime);



// The concatenation assignment operator 

var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."