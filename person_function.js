
// Person Builder or Constructor
function Person(firstName, lastName, humanAge){
    // Convert two strings and a number into ONE object
    return {
        first : firstName,
        last : lastName,
        age : humanAge
    }; // Returns literal object
}

personObject = Person("Jalen", "Battle", 22) // This is the person we built

// Console logs the person we just created
console.log(`
    First Name: ${personObject.first}
    Last Name: ${personObject.last} 
    Age: ${personObject.age}
    `)