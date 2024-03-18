function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
function show_magicians(magicians: string[]) {
    console.log(magicians);
}

let magicians = ["John", "Jennay", "Herry"];

make_great(magicians); 
show_magicians(magicians); 