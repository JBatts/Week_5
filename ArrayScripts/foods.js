let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

function getTotal (event) {
    let subtotal = 0;
    for(i=0; i < event.length; i++) {
        subtotal += event[i]["price"]; // ["price"] could also be written as .price
    };
    let tax = .08;
    let tip = .18;
    let totalCost = subtotal + (subtotal * tax) + (subtotal * tip);
    return totalCost.toFixed(2);
};
console.log(getTotal(lunch));

// mathF = 17.99 + 1.4392 + 3.2382
// console.log(mathF) // Checking my math