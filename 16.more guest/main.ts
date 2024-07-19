// Creating a guest List array
let guestList = ["laiba", "Saba", "ayesha", "Mahnoor"]

//Making variable for those guest who cant come 
let dontCome = guestList[0];

//print the name of guest who cant come
console.log(dontCome, "nahi aa skhti hain");

//Add or Remove Values from guest List array 
guestList.splice(0,1, "Laiba");

 //Message Print for Bigger table   
console.log("Good News I we Have a bigger table for dinner.");

//Adding a new value at starting Index of array
guestList.push("laraib");

//Adding a new value at ending Index of array
guestList.push("saira");

//get a index of our guest list array
let middleIndex:number =Math.floor(guestList.length / 2);

//Adding a new guest to middle index of array 
guestList.splice(middleIndex,0, "bisma");

console.log ("Upated list of our guest");

//sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`hii ${oneguest}, would you like to have a dinner with me`));