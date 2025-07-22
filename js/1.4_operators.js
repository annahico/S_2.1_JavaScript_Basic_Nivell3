// QUOKKA: CTRL+K Q
console.log("=== INICI DELS EXERCICIS 1.4 ===");

//***EXERCICI 1***:
// Operador Spread en Arrays: 
// Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.
console.log("\n--- Exercici 1 ---");
const array1 = [1,2,3,];
const array2 = [4,5,6];
const array3 = [...array1, ...array2];
console.log(array3); 

//***EXERCICI 2***:
// Operador Rest en Funcions: 
// Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.
console.log("\n--- Exercici 2 ---");
function suma(...arg) {
    return arg.reduce((acc, curr) => acc + curr, 0);
}

console.log(suma(1,2,3));

//***EXERCICI 3***:
// Copiant objectes amb Spread: 
// Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread.
// Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.
console.log("\n--- Exercici 3 ---");
const objecte1 = { nom: 'Anna', edat: 30 };
const objecte2 = { ...objecte1, edat:31 }; // no modifico, faig reescritura
console.log(objecte1);
console.log(objecte2);

console.log("\n--- Exercici 3 segons corrector ---");
const obj1 = { atr1: 1, atr2: 2 };
const obj2 = {...obj1}
obj2.atr1 = 3; //es modifica, no es fa reescritura
console.log(obj1);
console.log(obj2); // { atr1: 1, atr2: 2 }

//***EXERCICI 4***:
// Rest en Destructuring: 
// Crea una array amb diversos elements.
//  Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.
console.log("\n--- Exercici 4 ---");
const array = [1,2,3,4,5];
const [primer, segon, ...rest] = array;
console.log(primer);
console.log(segon);
console.log(rest); 

//***EXERCICI 5***:
// Spread en Funcions: 
// Crea una funció que accepti tres arguments.
//  Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.
console.log("\n--- Exercici 5 ---");
function mostrarInfo(nom, edat, ciutat) {
    console.log(`${nom} té ${edat} anys i viu a ${ciutat}.`);
}

const dades = [ 'Anna', 32, 'Barcelona' ];
mostrarInfo(...dades);

//***EXERCICI 6***:
// Fusionant Objectes amb Spread: 
// Crea dos objectes amb propietats diferents. 
// Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.
console.log("\n--- Exercici 6 ---");
const persona = { nom: 'Anna', edat: 32};
const direccio = { ciutat: 'Barcelona', pais: 'Espanya' };
const personaCompleta = {...persona, ...direccio };
console.log(personaCompleta);

