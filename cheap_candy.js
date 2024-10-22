let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Skittles", price: 1.79 },
    { product: "Chocolate Bar", price: 2.59 },
    { product: "Loli-Pop", price: 0.79 },
    { product: "Lemon Heads", price: 2.15 },
    { product: "Peelerz", price: 5.99 },
    { product: "Sour Patch Kids", price: 1.92 },
];


function getCheapCandy() {
    cheapCandy = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].price < 4.00) {
            cheapCandy.push(products[i].product)
        }
    }
    return cheapCandy
}

function getMMCandy() {
    mmCandy = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].product.includes("M&M")) {
            mmCandy.push(products[i].product)
        }
    }
    return mmCandy
}

function getSwedFish() {
    swedFish = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].product == "Swedish Fish") {
            swedFish.push(products[i].product)
        }
    }
    return `Currently Available: ${swedFish}`
}

console.log(getCheapCandy())
console.log(getMMCandy())
console.log(getSwedFish())

