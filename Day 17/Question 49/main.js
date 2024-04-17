"use strict";
// Defines a function that accepts multiple hobbies as arguments:
function logHobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
    });
}
logHobbies("reading", "coding", "cycling");
