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
guestList.forEach(oneguest => console.log(`hii ${oneguest}, would you like to  a dinner with me`));

//inform  that only two guests can be invited for dinner
console.log("unfortunaely, the new dinner table wont arrive on time, so I can only invite two guests to dinner with me ")


// Using while-loop to remove guests from the array until only two names remain
while(guestList.length>2){
    let removedGuest=guestList.pop();
    console.log( `Sorry,${removedGuest} I cant invite you to dinner`);
}
//Sending a invitations to the last two guest on the list
    console.log("Invitations to the last 2 Guests");
    
    guestList.forEach(lasttwo => console. log(`Luckily ${lasttwo}, you are still invited to dinner`));
 //Removing last tuo Guest fron the list
    guestList.pop();
    guestList.pop();


    console.log("Empty List:", guestList);