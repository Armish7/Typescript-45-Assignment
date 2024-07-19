//Define a function to print each magician from an array 
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));

} 

//define an array containing magicians name 
let magicians_name = ["harry poter" ,"laiba", "saira" ]

//call the function to print each magician name 
show_magicians (magicians_name);