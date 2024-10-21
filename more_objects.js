// A single object can have many different unrelated properties
const person = { // Creates an Object (Key-value pairs)
    first : "Jalen",
    last : "Battle",
    age : 22,
    phone : "678-517-4478",
    DOB : new Date("8-09-2002")
};
person.hobby = "pool"; // Adds one more property and define its value
person.phone = "you dont have a phone" // This will replace the value of phone 

console.log(person.DOB);
console.log(person.phone);
console.log(person.hobby);
console.log(person) // Console logs the entire Object

const fruit = [ // Creates an Array (Just values)
    "apple",
    "banana",
    "cherry"
];

console.log(fruit[fruit.length - 1])

fruit.push("pineapple") // This is to add a value to the Array
console.log(fruit[fruit.length - 1])

// These can be fill later but defined as empty
empty_array = [] 
empty_object = {}