// QUOKKA: CTRL+K Q
console.log("=== INICI DELS EXERCICIS 1.3 ===");
//***EXERCICI 1***:
// Callback bàsic:
//  Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. 
// La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.
console.log("\n--- Exercici 1 ---");
function processar(nombre, callback) {
    callback(nombre);
}

function mostrarNombre(num) {
    console.log('El nombre és: ' + num);
}

processar(21, mostrarNombre);

//***EXERCICI 2***:
// Callbacks amb operacions matemàtiques: 
// Escriu una funció calculadora que accepti tres paràmetres: 
// dos nombres i una funció de callback. 
// La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. 
// Després, crida calculadora amb una funció que faci la suma dels dos nombres.
console.log("\n--- Exercici 2 ---");
function calculadora (num1, num2, callback) {
    return callback(num1,num2);
}

function suma(a,b) {
    return a + b;
}

const resultat = calculadora(5, 10, suma);
console.log(resultat);

//***EXERCICI 3***:
// Ús de callbacks en funcions asíncrones: 
// Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. 
// La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.
console.log("\n--- Exercici 3 ---");
function esperarISaludar(nom, callback) {
      console.log(`Iniciant espera de 2 segons per ${nom}...`);
    setTimeout(() => {
        console.log("Finalitzada l'espera");
        callback(nom);
    },2000); // 2000 mil·lisegons = 2 segons
}

function saludar(nom) {
    console.log(`Hola, ${nom}!`); // s'ha de posar el `  ` perque hi ha el ${variable}
}

console.log("Cridant esperarISaludar amb 'Anna':");
esperarISaludar('Anna', saludar);

//***EXERCICI 4***:
// Callbacks amb arrays:
//  Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. 
// La funció processarElements ha d'invocar la funció de callback per cada element de l'array.
console.log("\n--- Exercici 4 ---");
function processarElements(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

const nombres = [1, 2, 3, 4, 5];

processarElements(nombres, function(element) {
    console.log(`Element: ${element}`);
});

//***EXERCICI 5***:
// Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. 
// La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.
console.log("\n--- Exercici 5 ---");
function processarCadena(cadena, callback) {
    const cadenaMajuscules = cadena.toUpperCase();
    callback(cadenaMajuscules);
}

processarCadena('Hola món', function(text) {
    console.log(text);
})

processarCadena('JavaScript', function(text) {
    console.log(`La longitud de la cadena és: ${text.length}`);  
})
