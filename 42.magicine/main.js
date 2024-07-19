//Define a function to print each magician from an array 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//define an array containing magicians name 
var magicians_name = ["harry poter", "laiba", "saira"];
//call the function to print each magician name 
show_magicians(magicians_name);
