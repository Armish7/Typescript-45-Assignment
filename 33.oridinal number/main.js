//creating Array
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//using for-Loop
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var onenumber = number_1[_i];
    var OrdinalEnding = void 0;
    if (onenumber === 1) {
        OrdinalEnding = "st";
    }
    else if (onenumber === 2) {
        OrdinalEnding = "nd";
    }
    else if (onenumber === 3) {
        OrdinalEnding = "rd";
    }
    else {
        OrdinalEnding = "th";
    }
    console.log("".concat(onenumber).concat(OrdinalEnding));
}
