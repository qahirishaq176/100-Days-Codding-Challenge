let guests = ["Waheed", "Shahid", "Ahmed", "Anwar"];
console.log("Great news! I found a bigger dinner table");
//Adding more guests
guests.unshift("Khalid");
guests.splice(guests.length / 2, 0, "Junaid");
guests.push("Waseem");

guests.forEach(guest => {
    console.log(`Dear ${guest}, Would you like to join me on dinner?`);
});
   
console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
guests.splice(0, guests.length);
console.log(guests);