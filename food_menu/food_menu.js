
let menuObject = {
    drinksList: ["Water", "Tea", "Sweet Tea", "Coke", "Dr. Pepper", "Sprite"],
    entrees: ["Hamburger w/ Fries", "Grilled Cheese w/ Tater Tots", "Grilled Chicken w/ Veggies", "Chicken Fried Steak w/ Mashed Potatoes", "Fried Shrimp w/ Coleslaw", "Veggie Plate"],
    desserts: ["Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"],
};


// console.log(menuObject.drinksList)

for (key in menuObject) {
    let list = menuObject[key]
    console.log(key.toUpperCase(), list.length)
    let i = 0;
    for(text of list) {
        console.log("\t\t", i,  "#", text)
        i++;
    }


    // for (let i = 0; i < list.length; i++) {
    //     const text = list[i]
    //     console.log("\t\t", i, "#", text) // "\t" tabs the content over in console
    // }
}