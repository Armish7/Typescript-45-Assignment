//Making a function
function make_shirt (size:string = "Large", printMessage: string = "I Love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

//calling a function
make_shirt();

//calling a function now with Medium size and default message
make_shirt("Medium")

//calling a function now with small size and also different print message
make_shirt("small", "I love java script")