// CIAO GIUSEPPE! 

// Allego qui sotto gli esercizi corretti di ieri ( avevo caricato quello con lo switch corretto alle 21 ma ho avvisato solo Simona -.-' ).. spero non ci siano altri errori! Grazie mille per la correzione :) 

// <---------------------   ESERCIZI CORRETTI 15-05-24  ---------------------->
// ESERCIZIO NOME & COGNOME

const inputName = prompt("Insert your name");
// console.log(userName);

// Chiediamo all'utente tramite un prompt di inserire il suo cognome, poi salviamo il dato in una variabile;
const inputSurname = prompt('Please inset your surname');
// console.log(userSurname);

// Controlliamo che siano valori validi (non null) e mostriamo tramite alert errori specifici;
const isNotValidName = typeof inputName !== 'string'; 

if (isNotValidName) {
    alert('Sorry! You input isn\'t valid');
    window.location.reload();
}

const isNotValidSurname = typeof inputSurname !== 'string'; 

if (isNotValidSurname) {
    alert('Sorry! You input isn\'t valid');
    window.location.reload();
}

// Controlliamo che siano valori con almeno 3 caratteri e mostriamo tramite alert errori specifici;
const isNameTooShort = inputName.length < 3;

if (isNameTooShort) {
    alert('Sorry! Your name is too short!');
    window.location.reload();
}

const isSurnameTooShort = inputSurname.length < 3;

if (isSurnameTooShort) {
    alert('Sorry! Your name is too short!');
    window.location.reload();
}

// ESERCIZIO con SWITCH
/* 
Quizzone - Qui usiamo lo switch dove possibile
Creiamo una variabile let score = 0;
Proponiamo all'utente, tramite prompt, 4 domande di cultura generale e raccogliamo le sue risposte in altrettante variabili;
Per ogni risposta corretta aggiungiamo al score 3 punti, per ogni errata togliamo 1 punto;
Alla fine delle 4 domande mostriamo il pungeggio complessivo;
Poi se le hai indovinate tutte mostra un alert "Sei il nuovo campione!"
*/
let score = 0;

let answer1 = Number(prompt("Domanda 1: quanto fa 5 + 5?"));
switch (answer1) {
    case 10: {
        score += 3;
        break;
    } default: {
        score -= 1;
        break;
    }
}

let answer2 = Number(prompt("Domanda 2: quanto fa 7 - 3?"));
switch (answer2) {
    case 4: {
        score += 3;
        break;
    } default: {
        score -= 1;
        break;
    }
}

let answer3 = Number(prompt("Domanda 3: quanto fa 5 * 5?"));
switch (answer3) {
    case 25: {
        score += 3;
        break;
    } default: {
        score -= 1;
        break;
    }
}

let answer4 = Number(prompt("Domanda 4: quanto fa 20 / 5?"));
switch (answer4) {
    case 4: {
        score += 3;
        break;
    } default: {
        score -= 1;
        break;
    }
}
// console.log(answer1, answer2, answer3, answer4);

// Alla fine delle 4 domande mostriamo il pungeggio complessivo;
alert(`Il tuo punteggio è: ${score}`);

// Poi se le hai indovinate tutte mostra un alert "Sei il nuovo campione!"
if(score == 12) {
    alert('sei il nuovo campione!')
}

// <-------------------------  ESERCIZI 16-05-24  ------------------------->



// Rifacciamo l'esercizio del quiz di ieri in cui chiediamo all'utente di rispondere a domande a risposta multipla:

let reply1 = Number(prompt('2Qual\'è la capitale del Canada? 1. Ottawa 2. NewYork digita il numero della risposta corretta'));
let reply2 = Number(prompt('Qual\'è il paese più piccolo del mondo? 1. Il Vaticano 2. San Marino digita il numero della risposta corretta'));
let reply3 = Number(prompt('Qual\'è il fiore nazionale del Giappone? 1. Fiore di Loto 2. Ciliegio digita il numero della risposta corretta'));
let reply4 = Number(prompt('Il fiume più lungo del mondo? 1. Rio 2. Nilo digita il numero della risposta corretta'));

// Raccogliamo tutte le risposte date dall'utente anche dentro un array "risposte";
let replies = [reply1, reply2, reply3, reply4];

let result = 0;

switch (reply1) {
    case 1: {
        result += 1;
        break;
    } default: {
        result -= 1;
    }
}

switch (reply2) {
    case 1: {
        result += 1;
        break;
    } default: {
        result -= 1;
    }
}

switch (reply3) {
    case 2: {
        result += 1;
        break;
    } default: {
        result -= 1;
    }
}

switch (reply4) {
    case 2: {
        result += 1;
        break;
    } default: {
        result -= 1;
    }
}
// Quando diamo il risultato finale, mostriamo anche tutte le risposte date dall'utente dentro un solo console.log e dentro mettiamo anche la lunghezza del nostro array
alert(`Hai terminato il Quiz! Hai accumulato ${result} punti totali`)
console.log(replies, replies.length);
// console.log(replies.length);

// ----------------------------------------------------------------------------

// Raccogliamo tramite prompt (eseguito tre volte) 3 parole dall'utente
let firstWord = prompt('Dimmi una parola ed indovinerò se inizia per vocale o consonante').toLowerCase();
let secondWord = prompt('Dimmi un\'alta parola ed indovinerò se inizia per vocale o consonante').toLowerCase();
let thirdWord = prompt('Dimmi l\'ultima parola ed indovinerò se inizia per  vocale o consonante').toLowerCase();

// per ogni parola ricevuta mostriamo in console "vocale" o "consonante" in base alla prima lettera. 
// Usiamo un solo console.log per ogni parola sfruttando la potenzialità dell'operatore ternario.
let vowels = ['a', 'e', 'i', 'o', 'u'];

let firstLetterFirstWord = firstWord.charAt(0)
// console.log(firstLetterFirstWord)
let firstLetterSecondWord = secondWord.charAt(0)
let firstLetterThirdWord = thirdWord.charAt(0)

// console.log(firstLetterFirstWord.includes(vowels) ? 'vocale' : 'consonante')
// console.log(firstLetterSecondWord.includes(vowels) ? 'vocale' : 'consonante')
// console.log(firstLetterThirdWord.includes(vowels) ? 'vocale' : 'consonante')

console.log(vowels.includes(firstLetterFirstWord) ? 'vocale' : 'consonante')
console.log(vowels.includes(firstLetterSecondWord) ? 'voclae' : 'consonante')
console.log(vowels.includes(firstLetterThirdWord) ? 'vocale' : 'consonante')

const firstResult = vowels.includes(firstLetterFirstWord) ? 'vocale' : 'consonante';
const secondResult = vowels.includes(firstLetterSecondWord) ? 'voclae' : 'consonante'
const thirdResult = vowels.includes(firstLetterThirdWord) ? 'vocale' : 'consonante'

alert(`la prima parola iniziava per ${firstResult},
la seconda parola iniziava per ${secondResult},
la terza parola iniziava per ${thirdResult}`);

// if(firstLetterFirstWord.includes(vowels)) {
//     console.log('vocale')
// } else {
//     console.log('consonante')
// }

// let firstLetterSecondWord = secondWord.charAt(0)

// if(firstLetterSecondWord.includes(vowels)) {
//     console.log('vocale')
// } else {
//     console.log('consonante')
// }

// let firstLetterThirdWord = thirdWord.charAt(0)

// if(firstLetterThirdWord.includes(vowels)) {
//     console.log('vocale')
// } else {
//     console.log('consonante')
// }

// ----------------------------------------------------------------------------

/*
Data una parola stampiamo in console la parola al rovescio. 
Per farlo prima usiamo il metodo split delle stringhe che trasforma una stringa in array e poi controlliamo se esiste un metodo per invertire gli elementi... 

*/
const string = prompt('Inserisci una parola a piacimento');

// controlliamo se è una stringa valida prima!
const checkedString = typeof string === 'string';
console.log(checkedString);

if(checkedString) {
const array = string.split('');
console.log(array);
const arrayReverse = array.reverse();
console.log(arrayReverse);
const stringReverse = arrayReverse.join('');
console.log(stringReverse);
} else {
    alert('inserimento non valido, riprova!');
    window.location.reload();
}



