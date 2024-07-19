//creating a function with parameters which return a value  in string
function City_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
//calling a  function and print the returned value
console.log(City_country("karachi", "pakistan"));
console.log(City_country("tokyo", "japan"));
console.log(City_country("berlin", "Germany"));
