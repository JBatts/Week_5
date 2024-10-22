let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

function getMemberName(iD) {
    memberName = []
    for (let i = 0; i < academyMembers.length; i++) {
        if (academyMembers[i].memID == iD) {
            memberName.push(academyMembers[i].name)
        }
    }
    return `The employee with an ID of ${iD} is ${memberName}`
}

function getFamousName() {
    famousName = []
    for (let i = 0; i < academyMembers.length; i++) {
        if (academyMembers[i].films.length >= 3) {
            famousName.push(academyMembers[i].name)
        }
    }
    return `The employees ${famousName.join(", ")} has been in atleast 3 films`
}

function getBobName() {
    bobNames = [];
    for (let i = 0; i < academyMembers.length; i++) {
        if (academyMembers[i].name.startsWith("Bob")) {
            bobNames.push(academyMembers[i].name)
        }
    }
    return `Please welcome ${bobNames.join("and ")}`
}

function getAName() {
    aNames = [];
    for (let i = 0; i < academyMembers.length; i++) {
        for (let j = 0; j < academyMembers[i].films.length; j++) {
            if (academyMembers[i].films[j].startsWith("A")) {
                aNames.push(academyMembers[i].name)
                break;
            }
        }
    }
    return `${aNames} is the only Academy Member who was been in a film that starts with "A"`
}

console.log(getMemberName(187))
console.log(getFamousName())
console.log(getBobName())
console.log(getAName())