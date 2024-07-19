// Making a Array of Countries and Print its Original Order
let countriesToVisit: String[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:", countriesToVisit);

// Print the Array in Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// Show that the array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);

// Print the Array in Reversed Order without modifying the Actual Array List
console.log("Reverse Order:", [...countriesToVisit].reverse());

// Show that the array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);

// We have Changed the Original Array Order Now
console.log("Original Array Reversed:", countriesToVisit.reverse());

// Print the array to show that it's back to its original order
console.log("Back to Original Order:", countriesToVisit.reverse());

//print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

//we have changed again the original array order now in  reverse order again
console.log ("original Array Reversed Again:", countriesToVisit.reverse());