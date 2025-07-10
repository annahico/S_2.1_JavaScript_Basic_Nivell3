// node js/script.js

// ***EXERCICI 1***: 
// Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. 
// Converteix-la en una funció de fletxa. Per exemple:
// function add(a, b) {
//     return a + b;
// }

// ARROW FUNCTION => és una funció anònima que es pot assignar a una variable.
const add = (a, b) => a + b; // si poso ADD a la funció, no puc tornar a posar add a la arrow function

console.log(add(5, 3)); 


// ***EXERCICI 2***:
// Funció de fletxa sense paràmetres: 
// Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.

const randomNumber = () => Math.floor(Math.random() * 101);

console.log("Random Number:", randomNumber());


// ***EXERCICI 3***:
//Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. 
// La funció ha d'imprimir una salutació que inclogui el nom de la persona. 
// Per exemple: console.log(Hola, ${this.name});.

class Person {
    constructor(name) {
        this.name = name;
    }
    greet = () => console.log(`Hello ${this.name}`);
}
const person = new Person("there");
person.greet();