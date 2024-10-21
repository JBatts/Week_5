
let z = 0; // Unlike for() we initialize before the while()
const limit = 5; // All caps is clue its a true constant

console.log("The beginning");

while (z < limit) { // Should we continue? (Is i "0" less than limit "5")
    console.log("Z: ", z); // Prints it out
    z++; // Increment - bump up by one
}; // Go to top and revaluate continuing the experession ("i < limit")

console.log("The End", z);

// Logs

// The beginning
// 1
// 2
// 3
// 4
// The End 5


// Classic
for (j = 0; j < 5; j++) {
    console.log("J: ", j);
};

// num, i
// Book Example
let num = 1;
let i = 0; 
while (i < 15) { // Should we continue?
    console.log("i and num: ", i, num);
    i++; // Increment by 1 or Up by 1
    num = num * 2; // Doubles the value
    // num *= 2 // This is the same as above (Doubles the value)
};

// Better use of while
let count = 10;
while(count > 0) {
    console.log(count);
    count -= 1; // Decrement, Counts down could also use "count = count - 1"
};
console.log("Blast Off!!!")