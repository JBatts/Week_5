
let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];

function studentAverage(kids) {
    let totalAverage = 0

    for (i = 0; i < kids.length; i++) {
        scores = kids[i]["scores"];
        sum = 0

        for (let j = 0; j < scores.length; j++) {
            sum += scores[j];
        }

        let studentAvg = sum / scores.length
        console.log(`${kids[i].name}'s Average: ${studentAvg.toFixed(2)}`)
        totalAverage += studentAvg;
    }

    let classAverage = (totalAverage / kids.length);
    return `The Class Average is: ${classAverage.toFixed(2)}`;
};

console.log(studentAverage(students))