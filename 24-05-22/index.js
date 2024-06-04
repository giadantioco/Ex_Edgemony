// CIAO GIUSEPPE! Grazie per la correzione e buona giornata! 
// P.S. Purtroppo oggi ho avuto parecchie difficoltà nello svolgere gli esercizi :(
/*
#### Direzioni
Scriviamo una function che prende in parametro una serie indefinita di indicazioni, per ogni indicazione stampare un console.log

nb: le indicazione possono essere solo "su" "giù" "sinistra" "destra"

```js

function indicazioni(...directions){

}

indicazioni('su', 'su', 'sinistra'); 
// output:
// 'su'
// 'su'
// 'sinistra'
```


#### Contare le direzioni

scrivere una function partendo da quella di prima, per ogni direzione salvare dentro un oggetto il numero di indicazioni uguali.


function contaIndicazioni(...directions){
    const directions = { su: 0, giu: 0, ... };

    // fare un ciclo per ogni direction...

    return directions;
}


#### Conta il click

scriviamo una function che conta quante volte viene eseguita. Attacchiamo questa function all'evento click sul body usando document.body.onclick.

```js
let count = 0;
const countClick = () => {
    
} 

document.body.onclick = countClick;

// output:
// click -> 1
// click -> 2
// click -> 3

```



#### Bonus: Ripasso Array

Scrivere una function che data una stringa in input possa sostituire ogni carattere con il suo indice nell'alfabeto.

esempio: 
a = 1;
b = 2;

console.log(alphabetPosition('Rosso di sera, bel tempo si spera'))
// output: "18 15 19 19 15 4 9 19 5 18 1 2 5 12 20 5 13 16 15 19 9 19 16 5 18 1"

tips: 

```js
const indexForEachLetter = {
    a: 1,
}
const input = 'Rosso di sera, bel tempo si spera';


function alphabetPosition(string){
    let output = '';

    for(let letter of string){
        const value = indexForEachLetter[...];

    }

    return output;    
}
```
*/

// -------------------------------  ESERCIZI  -----------------------------
console.log('Esercizio 1:')

//Scriviamo una function che prende in parametro una serie indefinita di indicazioni, per ogni indicazione stampare un console.log

function indicazioni(...directions){
    directions.forEach(direction => {
        if (['su', 'giu', 'destra', 'sinistra'].includes(direction)) {
            console.log(direction)
        } else {
            console.log(`please insert a valid input ${direction}`)
        }
    })
}
console.log(indicazioni('su', 'su', 'sinistra')); 
console.log('*****************************')

console.log('Esercizio 2:')
//scrivere una function partendo da quella di prima, per ogni direzione salvare dentro un oggetto il numero di indicazioni uguali.

function contaIndicazioni(...directions){
    const counter = { su: 0, giu: 0, destra: 0, sinistra: 0 };

    for(const direction of directions) {
        if (counter[direction] !== undefined) {
            counter[direction]++;
        }
    }

    return directions;
}

console.log(contaIndicazioni('su', 'su', 'sinistra')); 
console.log('*****************************')

console.log('Esercizio 3:')
// scriviamo una function che conta quante volte viene eseguita. Attacchiamo questa function all'evento click sul body usando document.body.onclick.

let count = 0;
const countClick = () => {
    count++;
    console.log(`click : ${count}`)
}; 

document.body.onclick = countClick; // non riesco a farlo funzionare!
console.dir(countClick())
console.log('*****************************')
