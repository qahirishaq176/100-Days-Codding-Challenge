// Defines a function that accepts multiple hobbies as arguments:

function logHobbies(...hobbies: string[]) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
    });
}

logHobbies("reading", "coding", "cycling");