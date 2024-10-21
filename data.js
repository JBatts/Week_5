// Array (ordered list) of Objects (key:value pairs)
const data = [
    { name: "Danella", kind: "Dog" }, // First object
    { name: "Bella", kind: "Cat" },
    { name: "Beyonce", kind: "Turtle" },
    { name: "Elon Musk", kind: "CEO" },
];


// console.log(data[0]) // Console logs the entire first object in the array
// console.log(data[1]["name"]) // Console logs the value for name in the second object in the array\

// console.log(petToString(data[0])) // This is the first one
// console.log(petToString(data[data.length - 1])) // This is the last one

// Classic (old school)
// for (i = 0; i < data.length; i++) { // i is index
//     console.log(petToString(data[i])); 
// };


data.forEach( item => console.log(petToString(item)) )
function petToString(pet) {
    return `
        Pet Name: ${pet.name}
        Kind: Good ${pet.kind}
    `;
}
(data.forEach(petToString)); // Rubber stamp each item with named function

//////////////////////////////////

function PrintPetToString(pet) {
    console.log( petToString(pet) );
}

data.forEach(PrintPetToString)