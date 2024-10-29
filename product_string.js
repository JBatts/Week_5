
const codeString = "ZYZ:1234-Large";

function parsePartCode(code) {
    // Could use just split() or indexOf() and slice()
    let pieces_array = code.split(":");

    // Second split
    let final_two_string = pieces_array[1];
    let final_two_arry = final_two_string.split("-");

    return { // Return an Object
        supplierCode : pieces_array[0],
        productNumber : final_two_arry[0],
        size : final_two_arry[1]
    }
}
let part = parsePartCode(codeString)

console.log(`
    Code: ${part.supplierCode}
    Number: ${part.productNumber}
    Size: ${part.size}
    `);