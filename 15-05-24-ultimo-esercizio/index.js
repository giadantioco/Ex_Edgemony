// <---- BEST PRACTICE WITH JS ---->

const snake_case = '';
// const kebab-case = '';
const camelCase = '';
const FIXED_CONSTANT_OR_MAGIC_NUMBER = 3.14; // le variabili che non si possono toccare
const PascalCase = ''; // Dromedary Case -> solo per le classi 

const bigNumber = 9_999_999; // con numeri grandi possiamo separare le cifre con underscore, vengono ignorate dal programma

// booleani iniziano con verbi che rispondono a domande
const isUserLoggedIn = true;
const CanEditArticle = false;

// If/Else/Else if + Switch

// const firstName = 'Giada';

/*
Mercoledì 15/05
AirBnB best practices: https://github.com/airbnb/javascript
Esercizi
Nome e Cognome
Chiediamo all'utente tramite un prompt di inserire il suo nome, poi salviamo il dato in una variabile;

Chiediamo all'utente tramite un prompt di inserire il suo cognome, poi salviamo il dato in una variabile;

Controlliamo che siano valori validi (non null), con almeno 3 caratteri e mostriamo tramite alert errori specifici;

Se abbiamo mostrato un errore ricarichiamo la pagina usando window.location.reload();

Prendiamo il nome inserito e salviamo una nuova variabile trasformando la prima lettera in maiuscola, tip:

    const firstName = '...';
    const firstLetter; // ...
    const nameWithoutFirstLetter; // ...
    const firstNaneWithCapitalize; // ...
Prendiamo il cognome inserito e salviamo una nuova variabile trasformando la prima lettera in maiuscola;

Mostriamo tramite alert "Ciao + [Nome] + [Cognome]"

Quizzone - Qui usiamo lo switch dove possibile
Creiamo una variabile let score = 0;;
Proponiamo all'utente, tramite prompt, 4 domande di cultura generale e raccogliamo le sue risposte in altrettante variabili;
Per ogni risposta corretta aggiungiamo al score 3 punti, per ogni errata togliamo 1 punto;
Alla fine delle 4 domande mostriamo il pungeggio complessivo;
Poi se le hai indovinate tutte mostra un alert "Sei il nuovo campione!"
*/

// <---- GIADA ANTIOCO --->

// Chiediamo all'utente tramite un prompt di inserire il suo nome, poi salviamo il dato in una variabile;
const userName = prompt("Insert your name");
console.log(userName);

// Chiediamo all'utente tramite un prompt di inserire il suo cognome, poi salviamo il dato in una variabile;
const userSurname = prompt('Please inset your surname');
console.log(userSurname);

// Controlliamo che siano valori validi (non null), con almeno 3 caratteri e mostriamo tramite alert errori specifici;
if ((userName && userSurname) != "" && 
(userName.length && userSurname.length) > 3) {
    console.log('Geat! you have been registered');
} else if ((userName && userSurname) == "") {
    alert('Sorry! You input isn\'t valid');
    // Se abbiamo mostrato un errore ricarichiamo la pagina usando window.location.reload();
    window.location.reload();
} else if ((userName.length && userSurname.length) < 3) {
    alert('Sorry! Your name is too short!');
} else {
    alert('Sorry! I\'m lost! Try again ;)');
}
// Prendiamo il nome inserito e salviamo una nuova variabile trasformando la prima lettera in maiuscola, tip:


// const firstName = '...';
// const firstLetter; // ...
// const nameWithoutFirstLetter; // ...
// const firstNaneWithCapitalize; // ...
// Prendiamo il cognome inserito e salviamo una nuova variabile trasformando la prima lettera in maiuscola;

const firstLetterName = userName.charAt(0).toUpperCase();
const nameWithoutFirstLetter = userName.slice(1); 
const firstNameWithCapitalize = firstLetterName + nameWithoutFirstLetter;
console.log(firstNameWithCapitalize)

const firstLetterSurname = userSurname.charAt(0).toUpperCase();
const surnameWithoutFirstLetter = userSurname.slice(1); 
const lastNameWithCapitalize = firstLetterSurname + surnameWithoutFirstLetter;
console.log(lastNameWithCapitalize)

// Mostriamo tramite alert "Ciao + [Nome] + [Cognome]"
alert(`Ciao, ${firstNameWithCapitalize} ${lastNameWithCapitalize}`);

/* 
Quizzone - Qui usiamo lo switch dove possibile
Creiamo una variabile let score = 0;
Proponiamo all'utente, tramite prompt, 4 domande di cultura generale e raccogliamo le sue risposte in altrettante variabili;
Per ogni risposta corretta aggiungiamo al score 3 punti, per ogni errata togliamo 1 punto;
Alla fine delle 4 domande mostriamo il pungeggio complessivo;
Poi se le hai indovinate tutte mostra un alert "Sei il nuovo campione!"
*/
console.clear();

let score = 0;

// switch(score){ 
//     case 'question1': {
//         const firstAnswer = Number(prompt('calculate 4 + 4'));
//         if(firstAnswer == 8) {
//             score += 3;
//         } else {
//             score -= 1;
//         }
//     }
//     case 'question2': {
//         const secondAnswer = Number(prompt('calculate 10 - 8'));
//         if(secondAnswer == 2) {
//             score += 3;
//         } else {
//             score -= 1;
//         }
//     }
// }

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

console.log(answer1, answer2, answer3, answer4);

// let answers = [answer1, answer2, answer3, answer4]

// switch(score) {
//     case 'answers[0]' == 10: {
//         score += 3;
//         break;
//     } 
//     case 'answers[1]' == 4: {
//         score += 3;
//         break;
//     } 
//     case 'answers[3]' == 25: {
//         score += 3;
//         break;
//     }
//     case 'answers[4]' == 4: {
//         score += 3;
//         break;
//     } 
//     default: {
//         score -= 1;
//         break;
//     }
// }

// Alla fine delle 4 domande mostriamo il pungeggio complessivo;
alert(`Il tuo punteggio è: ${score}`);

// Poi se le hai indovinate tutte mostra un alert "Sei il nuovo campione!"
if(score == 12) {
    alert('sei il nuovo campione!')
}