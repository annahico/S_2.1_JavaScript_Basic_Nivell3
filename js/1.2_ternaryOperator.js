// node 1.2_ternaryOperator/script.js
// QUOKKA: CTRL+K Q

// ***EXERCICI 1***:
// Operador ternari bàsic: 
// Escriu una funció potConduir que accepti l'edat com a paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. 
// Si no, ha de retornar 'No pots conduir'.

function potConduir(edat) {
    return edat >= 18 ? 'Pots conduir' : 'No pots conduir';
}

console.log(potConduir(20));
console.log(potConduir(16));

// ***EXERCICI 2***:
// Ús amb operadors de comparació: 
// Escriu una expressió que utilitzi l'operador ternari per determinar quin dels dos nombres donats (num1 i num2) és més gran. 
// Si num1 és més gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.

function quinEsMesGran(num1, num2) {
    return num1 > num2 ? 'num1 és més gran' : 
           num1 < num2 ? 'num2 és més gran' : 'num1 i num2 són iguals';
}

console.log(quinEsMesGran(5,7));
console.log(quinEsMesGran(45, 44));
console.log(quinEsMesGran(100, 100)); 

// ***EXERCICI 3***:
// Ús enllaçat d'operadors ternaris: 
// Escriu una expressió que utilitzi enllaços d'operadors ternaris per determinar si un número és positiu, negatiu o zero.
function determinarSigne(num) {
    return num > 0 ? 'Positiu' :
           num < 0 ? 'Negatiu' : 'Zero';            
}

console.log(determinarSigne(9));
console.log(determinarSigne(-9));
console.log(determinarSigne(0));

// Operador ternari amb funcions: 
// Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.

function trobarMaxim(a, b, c) {
    const maximAB = a > b ? a : b;
    return c > maximAB ? c : maximAB;
}

console.log(trobarMaxim(10, 20, 15));
console.log(trobarMaxim(30, 25, 35));


// ***EXERCICI 4***:
// Operador ternari dins un bucle: 
// Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. 
// Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.

function parOImpar(numeros) {
    for (const num of numeros) {
        console.log(num % 2 === 0 ? `${num} és parell` : `${num} és imparell`);
    }
}

parOImpar([1, 2, 3, 4]);
