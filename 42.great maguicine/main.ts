//define the function to show magicians names 
function show_magicians (magicians:string []){
    magicians.forEach(name => console.log(name));
 }
 
 function make_great (magicians:string[]){
     return magicians.map(name => `The Great ${name}`);
 
 }
 //define an array of magicians name 
 let magicians_names= ["armsih" , "Adeea", "Shazia" ];
 
 
 let great_magicians= make_great(magicians_names);
 //call show_magicians that show maodified list of magicians
 show_magicians(great_magicians);