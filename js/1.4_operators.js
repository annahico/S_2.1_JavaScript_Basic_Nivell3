// node 1.4_operators/script.js
// QUOKKA: CTRL+K Q

//***EXERCICI 1***:
// Operador Spread en Arrays: 
// Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

const array1 = [1,2,3,];
const array2 = [4,5,6];
const array3 = [...array1, ...array2];
console.log(array3); 

//***EXERCICI 2***:
// Operador Rest en Funcions: 
// Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

function suma(...arg) {
    return arg.reduce((acc, curr) => acc + curr, 0);
}

console.log(suma(1,2,3));

//***EXERCICI 3***:
// Copiant objectes amb Spread: 
// Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread.
// Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

const objecte1 = { nom: 'Anna', edat: 30 };
const objecte2 = { ...objecte1, edat:31 };
console.log(objecte1);
console.log(objecte2);

//***EXERCICI 4***:
// Rest en Destructuring: 
// Crea una array amb diversos elements.
//  Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.

const array = [1,2,3,4,5];
const [primer, segon, ...rest] = array;
console.log(primer);
console.log(segon);
console.log(rest); 

//***EXERCICI 5***:




