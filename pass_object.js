const person = { // Creates an Object (Key-value pairs)
    first : "Jalen",
    last : "Battle",
    age : 22,
    phone : "678-517-4478",
    DOB : new Date("8-09-2002")
};

const person2 = { // Creates an Object (Key-value pairs)
    first : "Christopher",
    last : "Lamar",
    age : 12,
    phone : "678-419-4568",
    DOB : new Date("10-31-2002")
};

function showMe(human) {
    return `
    Full Name: ${human.first} ${human.last}
    Phone #: ${human.phone}
    Age : ${human.age} Years old
    Date of Birth: ${human.DOB}
    `
}

console.log(showMe(person));
console.log(showMe(person2));
console.log(showMe({first : "Dax", last : "Flame", phone : "8100-Tommy", age : 112, DOB : new Date("9-11-2002")}));

