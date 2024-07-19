//creating Array
let number = [1,2,3,4,5,6,7,8,9];

//using for-Loop
for( let onenumber of number){
    let OrdinalEnding :string ;

    if (onenumber === 1){
        OrdinalEnding = "st"

    } else if(onenumber === 2){
        OrdinalEnding = "nd"
    }
    else if (onenumber === 3){
        OrdinalEnding = "rd"
    }
    else{
        OrdinalEnding ="th" 
    }
        console.log(`${onenumber}${OrdinalEnding}`);
    }