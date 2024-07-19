function describe_City(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
//calling the function 
describe_City("karachi");
describe_City("Lahore");
describe_City("berlin", "Germany");
