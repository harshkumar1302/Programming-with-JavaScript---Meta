// used to unpack a box(operator), for example to unpack an array

let top3 = ["The Colosseum", "Trevi Fountain", "The Vatican City"];

function showItinerary(place1, place2, place3) {
    // place1 = top3[0];
    // place2 = top3[1];
    // place3 = top3[2];
    console.log(place1, place2, place3)
}

// showItinerary(top3[0], top3[1], top3[2]);
showItinerary(...top3);
