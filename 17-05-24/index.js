// CIAO GIUSEPPE! 

// Riallego l'esesrcizio 1 di ieri, essendo che Luca ci aveva detto che il quizzone sullo switch lo aveva scritto male, pensavo che richiedendoci l'esercizio del quiz del giorno prima dovevo utilizzare lo switch anche qui ..... -.-'' mi spiace averlo interpretato male!! Cercherò di seguie più alla lettera le richieste! :) 

// <---------------------   ESERCIZIO CORRETTO 16-05-24  ---------------------->

// Rifacciamo l'esercizio del quiz di ieri in cui chiediamo all'utente di rispondere a domande a risposta multipla, in particolare però:

// - Raccogliamo tutte le risposte date dall'utente anche dentro un array "risposte";

const risposte = [];
let score = 0;
let risposta;

// domanda 1:
risposta = prompt(`Qual\'è la capitale del Canada? 
Ottawa
NewYork`
).toLowerCase();

score += (risposta === 'ottawa') ? 1 : -1;
// aggiungere al nostro array di risposte;
risposte.push(risposta)
console.log(risposte);


// domanda 2:
risposta = prompt(`'Qual\'è il paese più piccolo del mondo? 
Il Vaticano 
San Marino`
).toLowerCase();

score += (risposta === 'il vaticano') ? 1 : -1;
// aggiungere al nostro array di risposte;
risposte.push(risposta)
console.log(risposte);

// domanda 3:
risposta = prompt(`'Il fiume più lungo del mondo? 
Rio 
Nilo`
).toLowerCase();

score += (risposta === 'nilo') ? 1 : -1;
// aggiungere al nostro array di risposte;
risposte.push(risposta)
console.log(risposte);

// - Quando diamo il risultato finale, mostriamo anche tutte le risposte date dall'utente dentro un solo console.log e dentro mettiamo anche la lunghezza del nostro array
if (score === 3) {
    alert('Sei un campione! Hai ottenuto il punteggio massimo')
}
const totaleRisposte = risposte.length;
const risposteToString = risposte.join('", "')
console.log(`Hai risposto a ${totaleRisposte} domande ed ottenuto ${score} punti!`, `Le tue risposte sono state "${risposteToString}"`) 

console.log('****************************************')

// <-------------------------  ESERCIZI 17-05-24  ------------------------->


// Trova il positivo:
// dato un array di numeri [-1, -2, -10, 2, 5];

// scriviamo due cicli for che soddisfano ognuno una condizione:
// 1. Stampare in console solo i numeri > 0
// 2. Deve interrompere al primo numero > 0 l'esecuzione del for (break)

const array = [-1, -2, -10, 2, 5];
console.log(array)

// 1. Stampare in console solo i numeri > 0
for (let i = 0; i < array.length; i++) {
    const item = array[i];

    (item > 0) ? 
    console.log(`numeri > 0: ${item}`) : 
    console.log(`numeri > 0: ${item}`)

    // if (item > 0) {
    //     console.log(`numeri > 0: ${item}`)
    // }
}

console.log('****************************************')


// 2. Deve interrompere al primo numero > 0 l'esecuzione del for (break)
for (let i = 0; i < array.length; i++) {
    const item = array[i];

    if (item > 0) {
        console.log(`primo numero > 0: ${item}`)
        break;
    }
}

console.log('****************************************')


// ----------------------------------------------------------------------------

// Palindromi:
// abbiamo visto come si trova una parola palindroma, ma non l'abbiamo fatto in modo efficente.
// Quello che dovremo fare invece è: prendere una parola dall'utente tramite prompt, scomporla in array
// ed usare un for per poter controllare se è palindroma.

// nel caso in cui non troviamo corrispondenza usiamo dal for e stampiamo in console.log un messaggio.
// se nell'ultimo carattere della parola non abbiamo riscontrato errori stampiamo un console.log con "Successo! è un palindromo!"


// tips:
// ogni carattere è uguale al suo elemento specchio nella parola
// elemento ad indice 0 === elemento ad indice fine meno -1
// elemento ad indice 1 === elemento ad indice fine meno -2
// elemento ad indice i === elemento ad indice fine meno (i * -1) -1 /// length - i - 1 

// ```js
// for(){

//     if( elemento corrisponde a...){}

//     isLast = index === length -1;

//     if(elemento è l'ultimo dell'array...){

//     }
// }
// ```

// ----


// */

let string = prompt('Inserisci una parola a piacimento').toLowerCase().split('');
console.log(string);
let length = string.length;
let isPalindrome = true;
// ed usare un for per poter controllare se è palindroma.
for (let i = 0; i < string.length; i++) {
    // console.log(string[i])
    let index = string[i];
    // console.log(index)
    let isLast = length -1 -i;
    // console.log(isLast)
        if (index !== string[isLast]){
            isPalindrome = false;
            break;
        }
}
if (isPalindrome) {
    console.log(`Successo! la parola ${string} è palindroma`)
} else {
    console.log(`la tua parola ${string} non è palindroma`)
}




 