//define the function to show agicians name 
function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
}

// Function to make magicians great through .map() it will modify array
function make_great(magicians: string[]) {
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians names
let magician_names = ["Harry Potter", "Hamza", "Usman"];

// Making a copy of Original array through .slice() function
let copy_magician_names = magician_names.slice();

// Modify the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magician_names);

// Show both arrays Original and Copied

// Original
show_magicians(magician_names);

// Copied
show_magicians(copy_great_magicians);