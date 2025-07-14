// node 1.1_arrowFunction/script.js

// ***EXERCICI 1***: 
// Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. 
// Converteix-la en una funció de fletxa. Per exemple:
function add(a, b) {
    return a + b;
}

// ARROW FUNCTION => és una funció anònima que es pot assignar a una variable.
const func = (a, b) => a + b; // si poso ADD a la funció, no puc tornar a posar add a la arrow function

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
    name;  
    greet = () => console.log(`Hello ${this.name}`);
}

const person = new Person();
person.name = "Anna";  
person.greet();   

// ***EXERCICI 4***:
// Funció de fletxa dins d'un loop: 
// Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.

const printNumbers = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        const printNumber = () => console.log(numbers[i]);
        printNumber();
    }
}

const nums = [1, 2, 3, 4];
printNumbers(nums);

// ***EXERCICI 5***:
// Funció de fletxa amb 'setTimeout': 
// Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.

const showMessage = () => {
    setTimeout(() => {
        console.log("This message is displayed after 3 seconds");
    }, 3000); // 1000 ms = 1 segon
};  

showMessage();