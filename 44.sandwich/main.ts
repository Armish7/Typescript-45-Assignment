//Define a function with a rest parameter that accept items arguments representing our

function makeSandwich(...items: string[]){
    console.log("n\Making a sandwich with the following items: \n");

    items.forEach(singleItems => console.log(singleItems));

    console.log("\nNow Enjoy sandwich");
}

//call the function 3 with different number of arguments
makeSandwich("chicken", "Egg", "cheese");

makeSandwich ("bread", "Butter");

makeSandwich ("bread", "chicken","egg","lettuce", "mayo",);