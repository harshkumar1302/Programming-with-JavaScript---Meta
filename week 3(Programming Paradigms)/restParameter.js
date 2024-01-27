// used to build a smaller box (operator) and pack items into it 

const top7 = ["Mumbai", "Himachal", "Uttarakhand", "Assam", "Kerala", "Ladakh", "Jaipur"];

const [first, second, third, ...secondVisit] = top7;

console.log(`My top priority places to visit in my First tour are ${first}, ${second}, ${third}.`)
console.log(`I would visit ${secondVisit.join(", ")} when come India again.`)


// In function 

function addTaxToPrice(taxRate, ...itemsBought) {
    return itemsBought.map(item => taxRate * item)
}
let bill = addTaxToPrice(1.6, 46, 89, 35, 79);
console.log(bill);


