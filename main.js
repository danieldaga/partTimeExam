//exercise 9

// Escribe una función que acepte un número y muestre por consola una cuenta atrás, es decir, una lista de numeros desde el número tecleado hasta el 0. 
//Después, debe mostrar por consola la cuenta desde 0 hasta el número introducido. 

function descCount(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i)
    }
}
descCount(15)

function asCount(num) {
    for (let i = 0; i <= num; i++) {
        console.log(i)

    }
}
asCount(15)





//kataClub El club de la Kata

//  13.1 Crea dos objetos llamados Dani y Pablo. Dales las propiedades `name`, `healthPoints` y `attackDamage`: Dani tendrá 120 `HP` y 25 de `damage`; Pablo tendrá 100 `HP`y 19 de `damage`.

//  13.2 Crea en cada uno de los objetos un método `attack` que acepte otro objeto y le reste a su `healthPoints` los puntos de `attackDamage` del objeto atacante.

//  13.4 Ahora vamos a automatizar la lucha: crea la función `fight` que acepte dos objetos y haga que el primero ataque al segundo hasta que sus `healthPoints` 
// sea menor o igual a 0. La función debe contabilizar el número de ataques que ha tardado en derrotar el primer objeto al segundo y mostrarlos por la 
// consola: "{name1} ha derrotado a {name2} en {numberOfAttacks} rondas.".

//  13.5 Recuerda: la primera regla del Club de la Kata, es que nadie habla del Club de la Kata...


let dani = {    //13.1
    name: 'Dani',
    HP: 120,
    damage: 25,
}
let pablo = {  //13.1
    name: 'Pablo',
    HP: 100,
    damage: 19,
}
dani.attack = (enemy) => enemy.HP -= dani.damage  //13.2
pablo.attack = (enemy) => enemy.HP -= pablo.damage //13.2

console.log(dani, pablo)

function fight(playerOne, playerTwo) {     //13.4

    let numberOfAttack = 0
    while (playerTwo.HP > 0) {
        playerOne.attack(playerTwo)
        numberOfAttack++
        console.log(playerTwo)
    }
    console.log(`${playerOne.name} ha derrotado a ${playerTwo.name} en ${numberOfAttack} rondas`)
}

fight(dani, pablo)

