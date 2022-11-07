//exercise 9
function descCount(num) {
    for (let i = num; i > 0; i--) {
        console.log(i);
    }
}
descCount(15)

function asCount(num) {
    for (let i = 0; i < num + 1; i++) {
        console.log(i);

    }
}
asCount(15)



//kataClub

let dani = {
    name: 'Dani',
    HP: 120,
    damage: 25,
    attack: (enemy) => enemy.HP -= dani.damage
}
let pablo = {
    name: 'Pablo',
    HP: 100,
    damage: 19,
    attack: (enemy) => enemy.HP -= pablo.damage
}


pablo.attack(dani)

console.log(dani, pablo);

function fight(playerOne, playerTwo) {

    let numberOfAttack = 0
    while (playerTwo.HP > 0) {
        playerOne.attack(playerTwo)
        numberOfAttack++
        console.log(playerTwo);
    }
    console.log(`${playerOne.name} ha derrotado a ${playerTwo.name} en ${numberOfAttack} rondas`)

}
fight(dani, pablo)

