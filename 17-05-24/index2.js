// <-------  ESERCIZIO 16-05-24 MIGLIORATO con 1 SWITCH & TERNARIO  --------->
// Rifacciamo l'esercizio del quiz di ieri in cui chiediamo all'utente di rispondere a domande a risposta multipla:
// domanda 1:
let replyOne = Number(prompt(`Qual\'è la capitale del Canada? 
1. Ottawa 
2. New York 
Digita il numero della risposta corretta`));
// domanda 2:
let replyTwo = Number(prompt(`Qual\'è il paese più piccolo del mondo? 
1. Il Vaticano 
2. San Marino 
Digita il numero della risposta corretta`));
// domanda 3:
let replyThree = Number(prompt(`Qual\'è il fiore nazionale del Giappone? 
1. Fiore di Loto 
2. Ciliegio 
Digita il numero della risposta corretta`));
// domanda 4:
let replyFour = Number(prompt(`Il fiume più lungo del mondo? 
1. Rio 
2. Nilo 
Digita il numero della risposta corretta`));

// Raccogliamo tutte le risposte date dall'utente anche dentro un array "risposte";

replies = [];
replies.push(replyOne, replyTwo, replyThree, replyFour);
console.log(replies)

let result = 0;

switch (replyOne) {
    case 1: 
    case 2:
    {
        result += (replyOne === 1) ? 1 : -1;
        result += (replyTwo === 1) ? 1 : -1;
        result += (replyThree === 2) ? 1 : -1;
        result += (replyFour === 2) ? 1 : -1;
        break;   
    } 
    default: {
        result -= 1;
    }
}

alert(`Hai terminato il Quiz! Hai accumulato ${result} punti totali`)
console.log(replies, replies.length);

console.log('****************************************')

// <------------------------------------------------------------------------>

let wordOne = prompt("dimmi una parola").toLowerCase()
let wordTwo = prompt("dimmi un'altra parola").toLowerCase()
let wordThree = prompt("dimmi l'ultima parola").toLowerCase()

const vowel = 'aeiou';

console.log(vowel.includes(wordOne[0]) ? 'vocale' : 'consonante')
console.log(vowel.includes(wordTwo[0]) ? 'vocale' : 'consonante')
console.log(vowel.includes(wordThree[0]) ? 'vocale' : 'consonante')

console.log('****************************************')

// <-------------  ESERCIZIO 17-05-24 PALINDROME RIVISITATO  --------------->

const string = 
prompt(`Inserisci una parola e ti dirò se è palindroma!`).toLowerCase()

function Palindrome() {
    let stringReverse = string.split('').reverse().join('');
    (string !== stringReverse) 
    ? console.log(`Ritenta! La parola ${string} non è palindroma`)
    : console.log(`La parola ${string} è palindroma!`)
}
Palindrome()

// <------------------------------------------------------------------------>




