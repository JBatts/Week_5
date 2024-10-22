// Offest
const citrus = ["lemon", "orange", "grapefruit", "yuzu"];
citrus.push("lime");// Add at the end

let index = 0; // Initializer offset

while (index < citrus.length) {
    // do this if true
    console.log(index, citrus[index]);
    index++;

}

console.log(index, "Outside after the loop!")

for (let i = 0; i < citrus.length; i++){
    console.log(i, citrus[i])
}