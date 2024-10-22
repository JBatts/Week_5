
// const things = []
// const entities = []

const spriteList = [] // Things that can move on screen
function Position(xPara, yPara) {
    return {
        x: xPara,
        y: yPara
    };
};

let p = Position(10, 5);
console.log(p.x, p.y);

function Sprite(namePara, kindPara, posPara) {
    return {
        health: 100,
        name: namePara,
        kind: kindPara,
        position: posPara
    };
};
spriteList.push(Sprite("Minecraft Steve", "Adventurer", Position(100, 50)))
spriteList.push(Sprite("Minecraft Alex", "Adventurer", Position(10, 50)))
spriteList.push(Sprite("The Ender Dragon", "Evil Dragon", Position(500, 200)))
spriteList.push(Sprite("The Evil Dragon", "Evil Dragon", Position(500, 20)))
spriteList.push(Sprite("The Slender Dragon", "Evil Dragon", Position(50, 200)))
spriteList.push(Sprite("The Angry Dragon", "Evil Dragon", Position(50, 20)))

// console.log(spriteList[0])
// console.log(spriteList[1])
// console.log(spriteList[2].position)

function printList(list) {
    for (let i = 0; i < spriteList.length; i++) {
        console.log(i, list[i])
    }
}

function getHeroList() {
    const outputList = [];
    for (let i = 0; i < spriteList.length; i++) {
        if(spriteList[i].kind === "Adventurer"){ // filter adventurers
           outputList.push(spriteList[i]) // add to array list
        }
    }
    return outputList;
}


printList(getHeroList());

function printHero() {
    for (i = 0; i < spriteList.length; i++) {
        if(spriteList[i].kind === "Adventurer")
        console.log(i, spriteList[i])
    }
}

function printAll() {
    for (i = 0; i < spriteList.length; i++) {
        console.log(i, spriteList[i++])
    }
}

function printEvilDragon() {
    for (i = 0; i < spriteList.length; i++) {
        if(spriteList[i].kind === "Evil Dragon")
        console.log(i, spriteList[i])
    }
}

// printEvilDragon()
// printHero()

