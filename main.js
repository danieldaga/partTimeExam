//exercise 9
function descCount(num) {
    for (let i = num; i > 0; i--) {
        console.log(i);
    }
}
descCount(15)

function asCount(num) {
    for (let i = 0; i < num+1; i++) {
        console.log(i);
        
    }
}
asCount(15)



//kataClub

let dani = {
    name: 'Dani',
    HP: 120,
    damage: 25,
    attack : (enemy) => enemy.HP -= dani.damage
}
let pablo = {
    name: 'Pablo',
    HP: 100,
    damage: 19,
    attack : (enemy) => enemy.HP -= pablo.damage
}


pablo.attack(dani)

console.log(dani, pablo);

function fight(playerOne, playerTwo) {
    
    while (playerTwo.HP>0) {
        let numberOfAttack = 0
        playerOne.attack(playerTwo)
        numberOfAttack ++
        console.log(playerTwo);
    }
    console.log(`${playerOne.name} ha derrotado a ${playerTwo.name} en  rondas`)

}
fight(dani, pablo)


// function fight(dani, pablo) {
//     let numberOfAttacks = 0 //contador
//     for (let i = 0; i <= pablo.HP; i++) {
//         dani.attack = (enemy) => {
//         enemy.HP -= dani.damage
        
//             // function fight(Tyler, Chuck) {
//             // }
//         }
//         dani.attack(pablo)
//         let numberOfAttacks = (i.length)
//         numberOfAttacks ++
//     }
//     console.log(`${dani.name} ha derrotado a ${pablo.name} en ${numberOfAttacks} rondas`)
    

//     } 

// fight(dani, pablo)
// console.log(dani, pablo);