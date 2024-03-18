//Changing Guest List:
let guestList = ["Ahmed Khan", "Waleed Hussain","Imran Syed"];
guestList.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

let unableToAttend = "Ahmed Khan";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Shahid Anwar";
guestList[guestList.indexOf(unableToAttend)] = newGuest;

// New invitations
guestList.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});