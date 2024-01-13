//function without parameters

function addTwoNumber() {
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log(c);
}
addTwoNumber();


// function with parameters

function addTwoNums(a, b) {
    var c = a + b;
    console.log(c);
}

addTwoNums(65, 35);


// task 


function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log("Found the", match, "at", i);
        } else {
            console.log("---No match found at", i);
        }
    }
}

letterFinder('test', 't');