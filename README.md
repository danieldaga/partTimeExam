# PartTimeExam_JS

# Examen de JS

# PARTE A

## Ejercicio 1
Crea una función que acepte un array de números y devuelva la suma de los números impares del array.

## Ejercicio 2
Crea una función que acepte un array de números y devuelva la cantidad de números pares que hay en la array.

## Ejercicio 3
Usando un bucle `for`, escribe una función que acepte un número y muestre por consola la lista de números desde el 0 al valor introducido en al función.

## Ejercicio 4
Escribe una función que acepte un número y muestre por consola una cuenta atrás, es decir, una lista de numeros desde el número tecleado hasta el 0. 

## Ejercicio 5
Escribe una función que acepte un número y devuelva la lista de todos los números múltiplos de 3 del 0 al número introducido.

## Ejercicio 6
Escribe una función que acepte un número e imprima por consola la tabla de multiplicar (del 0 al 10) de dicho número siguiendo este patrón:
```javascript
num x 0 = <result>
num x 1 = <result>
num x 2 = <result>
num x 3 = <result>
num x 4 = <result>
num x 5 = <result>
num x 6 = <result>
num x 7 = <result>
num x 8 = <result>
num x 9 = <result>
num x 10 = <result>
```

## Ejercicio 7
Escribe una función que acepte un número e imprima por consola todos los números del 0 a dicho número que sean múltiplos de 3. Recuerda: un número es múltiplo de N cuando al dividirlo por N el resto es 0.

## Jejercicio 8 
Escribe una función que acepte dos números y devuelva cuál es el mayor, o bien si son iguales.
 Resultado esperado: `The largest number is [number]`.
 O: `The numbers are equal`.
 
 ## Ejercicio 9

Escribe una función que acepte un número y muestre por consola una cuenta atrás, es decir, una lista de numeros desde el número tecleado hasta el 0. Después, debe mostrar por consola la cuenta desde 0 hasta el número introducido. 



# PARTE B

## Ejercicio 10
Escribe una función que acepte dos argumentos: un array de strings y un string. La función debe devolver el número de veces que el string aparece en la array.

- Ejemplo:
````javascript
function repeCount(['casa','coche', 'perro', 'casa', 'manzana', 'motocicleta', 'javascript', 'perro', 'casa'], 'casa')
````
Debería devolver `3`


## Ejercicio 11

Escribe una función que permita realizar cualquiera de las cuatro operaciones matemáticas básicas.
```javascript
function evalOperation(num1, num2, operation) {
	return
}
```
Resultado esperado:
1.  Print el resultado de `num1 + num2` si la operación es “add”.
2.  Print el resultado de `num1 - num2` si la operación es “subtract”.
3.  Print el resultado de `num1 * num2` si la operación es “multiply”.
4.  Print el resultado de `num1 / num2` si la operación es “divide”.
5.  Print el resultado de `num1 % num2` si la operación es “modulus”.
6.  Si no se cumple ninguna de las anteriores, print `Invalid operation`.

- Ejemplo:
````javascript
function evalOperation(2, 3, "add")
````
Debería devolver `5` (2 + 3).

Pero:
````javascript
function evalOperation(2, 3, "substract")
````
Debería devolver `-1` (2 - 3).


## EJercicio 12. 

Dado el siguiente array: `['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']`

#### Escribe una función que:

##### a) Encuentre la posición del string `Friday`.

##### b) Si la longitud de ese string es mayor que el número de su posición, dale la vuelta al array.


## Ejercicio 13.

El club de la Kata

#### 13.1 Crea dos objetos llamados Dani y Pablo. Dales las propiedades `name`, `healthPoints` y `attackDamage`: Dani tendrá 120 `HP` y 25 de `damage`; Pablo tendrá 100 `HP`y 19 de `damage`.

#### 13.2 Crea en cada uno de los objetos un método `attack` que acepte otro objeto y le reste a su `healthPoints` los puntos de `attackDamage` del objeto atacante.

#### 13.4 Ahora vamos a automatizar la lucha: crea la función `fight` que acepte dos objetos y haga que el primero ataque al segundo hasta que sus `healthPoints` sea menor o igual a 0. La función debe contabilizar el número de ataques que ha tardado en derrotar el primer objeto al segundo y mostrarlos por la consola: "{name1} ha derrotado a {name2} en {numberOfAttacks} rondas.".

#### 13.5 Recuerda: la primera regla del Club de la Kata, es que nadie habla del Club de la Kata...


## Ejercicio 14

Escribe una función que acepte el número de mes (1 - 12) y devuelva el número de días de ese mes.
Resultado esperado: `The month has [number of days] days`.


## Ejercicio 15

Escribe una función que acepte un array de strings y devuelva otro array con los elementos del primer array que tengan menos de 5 letras:
```javascript
const arr = ["casa", "reloj", "carótida", "coco", "elemento", "GammaTech", "dado"];
```
getSmallWords(arr) // ["casa", "coco", "dado"]


## Ejercicio 16
Escribe una función que reciba un objeto y convierta cada par **key** / **value** en un array bidimensional:
```javascript
const myObj = {
	name: "Pedro",
	age: 35
}
```
getProps(myObj) // [ ["name", "Pedro"], ["age", 35] ]


## Ejercicio 17
Escribe una función que acepte un número y un substractor (otro número). Mientras que el número sea mayor que `0`, debes restarle el substractor. Debes devolver el número tal y como ha quedado despues de las restas. **No puedes usar un bucle for**:
```javascript
substract(10, 3) // -2
substract(5, 1) // 0
```


## Ejercicio 18 
Escribe una función que acepte una array de números y devuelva, en una array de longitud 2, el contador de números positivos y la suma de los números negativos
