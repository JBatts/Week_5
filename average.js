function getSumTotal(numberList){
    let sumTotal = 0
    for(let i = 0; i < numberList.length; i++){
        sumTotal += numberList[i]
    }
    // return `The average is ${average} and the total of the numbers are ${sumTotal}`
    return sumTotal / numberList.length 
}


console.log(`Average: ${getSumTotal([6, 3, 5, 0, 2])}`)

let students1 = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
];
let students2 = [
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];

function showAverages(students){
for (let i = 0; i < students.length; i++){
    let student = students[i];
    console.log(student.name, getSumTotal(student.scores).toFixed(2))
}}

showAverages(students1)
showAverages(students2)