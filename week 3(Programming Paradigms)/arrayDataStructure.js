// calculate the average of the grades of students

const grades = [75, 95, 90, 85, 80, 85];
let gradeSum = 0;
let gradeCount = grades.length;

for (i = 0; i < gradeCount; i++) {
    gradeSum += grades[i];
}

console.log(gradeSum);
let averageGrades = gradeSum / gradeCount;
console.log(averageGrades);



// Array Methods

//01. forEach()

const fruits = ["apple", "kiwi", "mango", "banana", "pear"];
function appendIndex(fruit, index) {
    console.log(`${index}: ${fruit}`);
}

fruits.forEach(appendIndex);

// forEach() method accepts function to work on each array list
// or //

const veggies = ["onion", "potatos", "garlic"];
veggies.forEach(function (veggie, index) {
    console.log(`${index}: ${veggie}`)
})


//02. filter()

const nums = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
nums.filter(function check(num) {
    return num > 20;
})

/* or
 const nums = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
 function check(num){
    return num>20;
 }
 console.log(nums.filter(check));

 OR 

const nums = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
let check = nums.filter(function (num){
    return num>20;
 })
 console.log(check);

 */


//03. map

const data1 = [0, 10, 20, 30, 40, 50];
data1.map(function (num) {
    return num / 10;
})

/* or

const data1 = [0,10,20,30,40,50];
function divide(num){
    return num/10;
}
console.log(data1.map(divide));
*/

// it simply creates an new array using
// the previous array and performing some operations

let arr = [1, 5, 9, 78, 6];
let a = arr.map(function (value, index, array) {
    console.log(`${index}: ${value} =  ${array}`);
    return value + 1;
})
console.log(a);

