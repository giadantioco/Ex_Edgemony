/*
Esercizi: 
- definiamo variabile che contiene una stringa
    - usiamo doppi apicie salviamo stringa : Ciao Mondo!
    - usiamo singoli apici e salviamo la stringa : Mio zio viene dalla citta dell'acquila
        - occhio ai singoli apici
    - usiamo il backtick per concatenare le due stringhe precedenti dentro una nuova, usando anche l'andata a capo

- Creiamo una nuova variabile in sui inseriamo una variabile precedente che modifichiamo portando il tutto in maiuscolo
- Definiamo una variabile e salviamo all'interno un dato passato dall'utente prompt()
    - Facciamo un console.log() del dato precedente portato a lowercase

- Chiediao al nostro user un numero da umno a dieci tramite prompt esolose maggiore di 7 esclamare in console.se ha vinto
    -tips: 
    prompt("Dammi un numero da uno a dieci!") // occhio che il prompt torna una stringa!
    if(... > 7) {

    }
*/

// <---- Definiamo variabile che contiene una stringa ---->
// usiamo doppi apicie salviamo stringa : Ciao Mondo!
const doubleString = "Ciao Mondo!";
console.log(doubleString);

// usiamo singoli apici e salviamo la stringa : Mio zio viene dalla citta dell'acquila
const string = "Mio zio viene dalla città dell'Acquila";
console.log(string);

// usiamo il backtick per concatenare le due stringhe precedenti dentro una nuova, usando anche l'andata a capo
const stringConcat = `${doubleString}.

${string}`;
console.log(stringConcat);

// <---- Creiamo una nuova variabile in cui inseriamo una variabile precedente che modifichiamo portando il tutto in maiuscolo ---->
const newString = doubleString.toUpperCase();
console.log(newString);

const newString2 = string;
console.log(newString2.toUpperCase());

// <---- Definiamo una variabile e salviamo all'interno un dato passato dall'utente prompt() ---->
const userPrompt = prompt("insert your name");
console.log(userPrompt);

// Facciamo un console.log() del dato precedente portato a lowercase
console.log(userPrompt.toLowerCase());

/*
<---- Chiediao al nostro user un numero da uno a dieci tramite prompt e solo se maggiore di 7 esclamare in console se ha vinto ---->
    -tips: 
    prompt("Dammi un numero da uno a dieci!") // occhio che il prompt torna una stringa!
    if(... > 7) {

    }
*/
const userInput = prompt("insert a number from 1 to 10");
const userInputNumber = Number(userInput);
console.log(userInputNumber);
console.log(typeof userInputNumber);

let num = userInputNumber;
if (num > 7) {
  prompt(`Number ${num} is bigger than seven, you Win!`);
} else {
  prompt(`Sorry, number ${num} is smaller than seven! You lose`);
}
