"use strict";
let numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45];
numbers.forEach(number => {
    let suffix = "th";
    if (number === 5) {
        suffix = "st";
    }
    else if (number === 10) {
        suffix = "nd";
    }
    else if (number === 15) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});
