"use strict";
let guests = ["Waheed", "Shahid", "Ahmed", "Anwar"];
console.log("Great news! I found a bigger dinner table");
//Adding more guests
guests.unshift("Khalid");
guests.splice(guests.length / 2, 0, "Junaid");
guests.push("Waseem");
guests.forEach(guest => {
    console.log(`Dear ${guest}, Would you like to join me on dinner?`);
});
