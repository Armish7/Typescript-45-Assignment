//define the function to show magicians names 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//define an array of magicians name 
var magicians_names = ["armsih", "Adeea", "Shazia"];
var great_magicians = make_great(magicians_names);
//call show_magicians that show maodified list of magicians
show_magicians(great_magicians);
