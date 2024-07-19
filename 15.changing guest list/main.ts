let guestlist = ["laiba", "Saba", "Ayesha" , "Mahnoor"];

let dontCome = guestlist[0];

console.log(dontCome, "nahi aa skhti");

guestlist.splice(0,1, "Adeena");

guestlist.forEach(guest => console.log(`hey! ${guest}, would you like to have a dinnen with me?`));