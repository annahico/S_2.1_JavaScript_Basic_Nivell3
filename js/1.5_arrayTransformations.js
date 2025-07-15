// node 1.4_array/script.js
// QUOKKA: CTRL+K Q


//** Exercici 1 */
// Map: Teniu un array de números [1, 2, 3, 4].
//  Crea una nova array que contingui el quadrat de cada número.

const numeros = [1,2,3,4];
const quadrats = numeros.map(numero => numero * numero);
console.log(quadrats);

//** Exercici 2 */
// Filter: Teniu una array de números [1, 2, 3, 4]. 
// Crea una nova array que només contingui els números parells.

const numeros2 = [1, 2, 3, 4];
const numerosParells = numeros2.filter(numero => numero % 2 === 0);
console.log(numerosParells);

//** Exercici 3 */
// Find: Teniu una array de números [1, 10 , 8, 11]. 
// Utilitza la funció find per a trobar el primer número que és major a 10.

const numeros3 = [1, 10, 8, 11];
const majorDe10 = numeros3.find ( numero => numero > 10);
console.log(majorDe10);

//** Exercici 4 */
// Reduce: Teniu una array de números [13, 7, 8, 21]. 
// Fes servir la funció reduce per a calcular la suma total dels números.

const numeros4 = [13, 7, 8, 21];
const sumaTotal = numeros4.reduce((acc, num) => acc + num, 0);
console.log(sumaTotal);
