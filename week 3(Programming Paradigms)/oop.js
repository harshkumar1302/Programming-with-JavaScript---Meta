// Object-oriented Programming Paradigms
/*  
    The Benefits of OOP
         Allows you to write modular code,
         Makes your code more flexible and
         Makes your code reusable.
    
    Principle Of OOP
        Inheritance
        Encapsulation
        Abstraction
        Polymorphism     
*/

// write some code that calculate the total cost of buying a pair of shoes.

// according to functional programming 
// Input or variable
var priceOfProduct = 5678;
var taxForTheProduct = 1.2;
// function for this code
function purchase1(priceOfProduct, taxForTheProduct) {
    return priceOfProduct * taxForTheProduct;
}
// output
var totalPrice = purchase1(priceOfProduct, taxForTheProduct);
console.log(`Total Price is INR ${totalPrice}.`)

// Now according to Object-oriented programming we do:

var purchase2 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function () {
        var calculation = purchase2.shoes + (purchase2.shoes * purchase2.stateTax);
        console.log(`Total Price: ${calculation} $`);
    }
}
purchase2.totalPrice();
console.log(purchase2.shoes);
console.log(purchase2.stateTax);



var purchase3 = {
    shirt: 59,
    stateTax: 1.2,
    totalPrice: function () {
        var calculation = this.shirt + (this.shirt * this.stateTax);
        console.log(`Total Price: ${calculation} $`);
    }
}
purchase3.totalPrice();

var purchase4 = {
    shirt: 49,
    stateTax: 1.2,
    totalPrice: function () {
        var calculation = this.shirt + (this.shirt * this.stateTax);
        console.log(`Total Price: ${calculation} $`);
    }
}
purchase4.totalPrice();