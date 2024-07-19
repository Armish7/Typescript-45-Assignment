// Array of Current Users
let current_users = ["anaya", "Ali", "Areeb", "Zai", "Osama"];

// Array of New Users
let new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeb"];

// Loop through new users to check for usernames availability
new_users.forEach(new_one_user => {

    // Making a Condition for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());

    // Print Different messages using If-Else statements
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`);
    } else {
        console.log(`This Username ${new_one_user} is available`);
    }
});