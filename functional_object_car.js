
// Functional programming treat functions as values (A data type)

const car = {
    location: 100,
    speed: 50,
    drive: (car) => car.location += car.speed
};


console.log(car.location) // Before 
car.drive(car)
car.drive(car)
car.drive(car)
car.drive(car)
car.drive(car)
console.log(car.location) // After

// What is += doing? Increasing the value on the left by the value on the right
let location = 1000
let speed = 10

console.log("Location before: ", location)
location += speed // Short for locattion = (location + speed)
location += speed // Short for locattion = (location + speed)
location += speed // Short for locattion = (location + speed)
console.log("Location after: ", location)


