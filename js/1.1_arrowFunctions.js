// QUOKKA: CTRL+K Q
console.log("=== INICI DELS EXERCICIS 1.1 ===");
// ***EXERCICI 1***: 
// Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. 
// Converteix-la en una funció de fletxa. Per exemple:
console.log("--- Exercici 1 ---");
function add(a, b) {
    return a + b;
}

const func = (a, b) => a + b; // si poso ADD a la funció, no puc tornar a posar add a la arrow function

console.log(add(5, 3)); 


// ***EXERCICI 2***:
// Funció de fletxa sense paràmetres: 
// Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.
console.log("--- Exercici 2 ---");
const randomNumber = () => Math.floor(Math.random() * 101);

console.log("Random Number:", randomNumber());


// ***EXERCICI 3***:
//Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. 
// La funció ha d'imprimir una salutació que inclogui el nom de la persona. 
// Per exemple: console.log(Hola, ${this.name});.
console.log("--- Exercici 3 ---");
class Person {
    greet = () => console.log(`Hello ${this.name}`);
}

const person = new Person();
person.name = "Anna";  
person.greet();   

// ***EXERCICI 4***:
// Funció de fletxa dins d'un loop: 
// Crea una funció anomenada printNumbers que accepti un array de números i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.
console.log("\n--- Exercici 4 ---");
const printNumbers = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        const printNumber = () => console.log(numbers[i]);
        printNumber();
    }
}

const nums = [1, 2, 3, 4];
printNumbers(nums);
console.log("Array original:", nums); 

// ***EXERCICI 5***:
// Funció de fletxa amb 'setTimeout': 
// Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.
console.log("\n--- Exercici 5 ---");
const showMessage = () => {
     console.log("Iniciant temporitzador de 3 segons...");
    setTimeout(() => {
        console.log("This message is displayed after 3 seconds");
    }, 3000); // 1000 ms = 1 segon
};  

showMessage();
console.log("Funció showMessage cridada, esperant 3 segons...");