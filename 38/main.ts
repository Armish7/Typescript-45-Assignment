function describe_City (city :  string, country :string = "pakistan"){
    console.log(`${city} is in ${country}`) ;

}

//calling the function 
describe_City("karachi");
describe_City("Lahore");

describe_City("berlin", "Germany");