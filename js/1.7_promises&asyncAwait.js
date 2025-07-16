// node 1.4_promises&asyncAwait/script.js
// QUOKKA: CTRL+K Q

// * Exercici 1 */
// Creació d'una Promesa: 
// Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.

const promesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Hola, món');
  }, 2000);
});

promesa.then((resultat) => {
  console.log(resultat); 
});

// * Exercici 2 */
// Utilització d'una Promesa: 
// Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.

promesa.then((resultat) => {
    console.log(resultat);  
});

// * Exercici 3 */
// Promesa amb reject: 
// Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.

function promesaAmbReject(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input === 'Hola') {
        resolve('La promesa sha resolt correctament');
      } else {
        reject('La promesa ha estat rebutjada');
      }
    }, 2000);
  });
}

promesaAmbReject('Hola')
  .then(console.log)
  .catch(console.error);

promesaAmbReject('Adéu')
  .then(console.log)
  .catch(console.error); 

// * Exercici 4 */
// Ús de async/await: 
// Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.

async function funcioAsync() {
  try {
    const resultat = await promesa; 
    console.log(resultat); 
  } catch (error) {
    console.error(error);
  }
}

funcioAsync(); 