var guestlist = ["laiba", "Saba", "Ayesha", "Mahnoor"];
var dontCome = guestlist[0];
console.log(dontCome, "nahi aa skhti");
guestlist.splice(0, 1, "Adeena");
guestlist.forEach(function (guest) { return console.log("hey! ".concat(guest, ", would you like to have a dinnen with me?")); });
