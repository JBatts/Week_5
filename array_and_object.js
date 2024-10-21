// CONTAINERS
// String - ordered list of characters

text = "ABC" // <-- String literal ""
console.log(text[0]) // Console logs "A"
console.log(text[1]) // Console logs "B"
console.log(text[text.length - 1]) // Console logs the last string "C"

// Array - ordered list of values
// Can repeat values in the list

list = ["apple", "mango", "cherry", "apple"] // <-- Array literal [] 
console.log(list[0]) // Console.logs "apple"
console.log(list[1]) // Console.logs "mango"
console.log(list[list.length - 1]) // Console logs the last value "cherry"
console.log(list[0], list[1], list[2]) // Console logs each value "apple", "mango", "cherry"

// Object - A bag of values accessed by name/keyword
// Can not repeat keyword it will be replaced instead
dictionary = { "a" : "apple", "b" : "banana", "c" : "churros"}
console.log(dictionary["a"]) // Console logs the value of the keyword "a" which is "apple"
console.log(dictionary["b"]) // Console logs the value of the keyword "b" which is "banana"
console.log(dictionary.c) // (Dot Notation) Console logs the value of the keyword "c" which is "churros" 


airports = {
    "PDX" : "Portland Airport",
    "ATL" : "Atlanta Airport",
    "LAX" : "Los Angeles Airport",
    "TPA" : "Tampa Airport",
    "ORL" : "Orlando Airport"
}

console.log(airports.ATL) // Dot notation - short way
console.log(airports["PDX"]) // Long way need the keyword ("PDX")

zip_code = {97018 : "The Big City Baby!"}
console.log(zip_code[97018]) // You can not use dot notation with numbers or to call multiple values
z = 97018
console.log(zip_code[z]) // You can use a variable to call the keyword as well

