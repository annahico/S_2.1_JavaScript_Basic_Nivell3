// node 1.4_arrayTransformation/script.js
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


//** Exercici 5 */
// Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:

// - Filtra els nombres majors o iguals a 10.

// - Multiplica cada nombre filtrat per 2.

// - Calcula la suma dels nombres filtrats i multiplicats per 2.

// - La funció ha de retornar el resultat de la suma.

const numeros5 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
const resultat = numeros5
    .filter(num => num >= 10)
    .map(num => num * 2)
    .reduce((acc, num) => acc + num, 0);
    console.log(resultat);
    
//** Exercici 6 */
// Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament

const numeros6 = [11, 12, 13, 14];
const totsMajorsQue10 = numeros6.every(numero => numero > 10);
const algunsMajorsQue10 = numeros6.some(numero => numero > 10);
console.log(`Tots són majors que 10? ${totsMajorsQue10}`); 
console.log(`Algun és major que 10? ${algunsMajorsQue10}`); 