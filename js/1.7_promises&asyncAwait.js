// QUOKKA: CTRL+K Q
console.log("=== INICI DELS EXERCICIS 1.7 ===");

// * Exercici 1 */
// Creació d'una Promesa: 
// Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.
console.log("\n--- Exercici 1 ---");
const promesa = new Promise((resolve) => {
  console.log("Iniciant promesa (2s)...");
  setTimeout(() => {
    console.log("Promesa resolta!");
    resolve('Hola, món');
  }, 2000);
});

promesa.then((resultat) => {
  console.log("Resultat de la promesa ex 1:", resultat);  
});

// * Exercici 2 */
// Utilització d'una Promesa: 
// Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.
console.log("\n--- Exercici 2 ---");
promesa.then((resultat) => {
  console.log("Resultat rebut al segon .then:", resultat);  
});

// * Exercici 3 */
// Promesa amb reject: 
// Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.
console.log("\n--- Exercici 3 ---");
function promesaAmbReject(input) {
   console.log(`\nProvant amb input: "${input}"`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input === 'Hola') {
        console.log("Input correcte - Resolent promesa");
        resolve('La promesa sha resolt correctament');
      } else {
        console.log("Input incorrecte - Rebutjant promesa");
        reject('La promesa ha estat rebutjada');
      }
    }, 2000);
  });
}

console.log("Cas d'èxit (input 'Hola'):");
promesaAmbReject('Hola')
  .then(console.log)
  .catch(console.error);

  console.log("Cas de fallada (input 'Adéu'):");
promesaAmbReject('Adéu')
  .then(console.log)
  .catch(console.error); 

// * Exercici 4 */
// Ús de async/await: 
// Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.
console.log("\n--- Exercici 4 ---");
async function funcioAsync() {
  console.log("Iniciant funció asíncrona...");
  try {
     console.log("Esperant resultat de la promesa...");
    const resultat = await promesa; 
    console.log("Resultat obtingut ex 4:", resultat);  
  } catch (error) {
    console.error("S'ha produït un error ex 4:", error);
  }
   console.log("Funció asíncrona finalitzada");
}

funcioAsync(); 