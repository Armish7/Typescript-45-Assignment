//Define a function with a rest parameter that accept items arguments representing our
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("n\Making a sandwich with the following items: \n");
    items.forEach(function (singleItems) { return console.log(singleItems); });
    console.log("\nNow Enjoy sandwich");
}
//call the function 3 with different number of arguments
makeSandwich("chicken", "Egg", "cheese");
makeSandwich("bread", "Butter");
makeSandwich("bread", "chicken", "egg", "lettuce", "mayo");
