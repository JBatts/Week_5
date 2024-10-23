
let kidList = ["Natalie", "Brittany", "Jucking"];
kidList.unshift("Bianaca"); // Puts it at the beginning of the list
kidList.push("Overlord"); // Puts it at the end of the list

// for *OF* circa 2012 for Array/List
for (let childName of kidList) {
    console.log(childName);
};

// But what about objects?

const peopleObject = {billy: 111, jucking: 999, celia: 579};

// For *IN* grabs all keys from an object
for (const key in peopleObject) {
    const score = peopleObject[key]
    console.log(`The player ${key.toUpperCase()} has a score of ${score}.`)
};