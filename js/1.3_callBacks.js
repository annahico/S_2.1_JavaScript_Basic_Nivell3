// node 1.3_callBacks/script.js
// QUOKKA: CTRL+K Q

// ***EXERCICI 1***:
// Callback bàsic:
//  Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. 
// La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.

function processar(nombre, callback) {
    callback(nombre);
}

function mostrarNombre(num) {
    console.log('El nombre és: ' + num);
}

processar(21, mostrarNombre);