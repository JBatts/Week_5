
// Objects vs. Arrays

// Access by index vs access by key (string or number)

// Array is accessed by index AKA position
// Object values are access by key

// All arrays are objects
// Most objects are not arrays

// All dogs are mammals,
// Not all mammals are dogs

object = {
    property1: "value1",
    property2: "value2",
    property3: "value3",

}

// Objects are nouns: people/ places/ things that can contain other objects and attributes
// What do cars have?
car = {
    price: 9999,
    make: "Lambo",
    model: "The really cool one",
    engine: {
        engineType: "Inline 4",
        pistons: [{ rodThrown: false }, { rodThrown: false }, { rodThrown: false }]
    }
}



htmlElement = {
    tagName: "div",
    class: ["hidden", "large", "col-3"],
    id: "thingy",
    name: "Juck",
    value: "123",
}

console.log(car["engine"].engineType) // Logs "Inline 4"

list = [] // New Array literal
list2 = new Array(); // new Object

colors = ["red0", "green1", "blue2"]; // List of colors
console.log(colors[1]); // Prints green1
console.log(colors.at(0)) // Prints red0

console.log(list.length)

now = new Date(); // Date object
count = new Number("123") // Number object

thing1 = {}; // Object literal
thing = new Object();

// element = document.createElement("div"); // Not in node.js

lots = []; // Empty list
for (let i = 0; i < 100; i++) {
    lots.push(i); // Add one number onto the end of the list
};
console.log(lots.length)// Prints 100

lotsaProps = {}; // Empty object
for (let i = 0; i < 1000; i++){
    lotsaProps[i] = i; // Key of i and value of i
}
console.log(`"Easy I did all those this"`)

