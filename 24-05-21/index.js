// CIAO GIUSEPPE! Grazie a te per la correzione e buona giornata :)

/*

- Scriviamo ed eseguamo una funzione che permetta di fare rapidamente un console.clear()

```js

function clear(){
    ...
}

clear() // fa stessa cosa di console.clear()

```

- Scriviamo ed eseguamo una funzione che possa data una stringa tornarne una nuova con la prima lettera maiuscola, il resto minuscolo.

```js

function capitalize(string){
    return // ...;
}

// output 
capitalize('ciao');     // Ciao
capitalize('mondo');    // Mondo
capitalize('Mondo');    // Mondo
capitalize('TEST');     // Test

```

- Scrivere una function che dati due parametri in ingresso controlla se siano numeri e torna il numero più piccolo:

```js

function min(a, b){

    return //...
}

console.log(min(1, 3));     // 1;
console.log(min(5, -3));    // -3;
console.log(min(100, 20));  // 20;

```

- Scriviamo una function potenza che accetta due parametri: base ed esponente. Facciamo tornare alla funzione il numero "base" moltiplicato per se stesso tante volte quante indicate dall'esponente

```js

function potenza(base, esponente){

    for(let i=0; i < espontente, i++){
        // ...
    }

}

// output:
potenza(4,2)    // 16
potenza(5,3)    // 125
potenza(1, 100) // 1

// bonus point prevediamo anche l'elevamento a potenza con esponente 0.


```

- Bonus point (opzionale):
il fattoriale (n!) in matematica è il prodotto di un numero intero per tutti i numeri precedenti positivi (!==0).
esempio: 5! (fattoriale di 5) è 5 * 4 * 3 * 2 * 1 = 120

scriviamo una funzione ricorsia che calcola il fattoriale di un numero passato tramite parametro e lo stampa in console.

```js

function factorial(n){

}

factorial(5) // 120
factorial(4) // 24

*/

// <---------------------------  ESERCIZI  ------------------------------->

// Scriviamo ed eseguamo una funzione che permetta di fare rapidamente un console.clear()\
function clear(message) {
    console.clear(message)
}

(clear('Questo messaggio non si vedrà in console'))
console.log('*******************************')

// Scriviamo ed eseguamo una funzione che data una stringa possa tornarne una nuova con la prima lettera maiuscola, il resto minuscolo.
console.log('Esercizio 2:')

function capitalize(string) {
    const capitalizeFirstLetter = string.at(0).toUpperCase()
    const capitalizedString = capitalizeFirstLetter + string.slice(1).toLowerCase();
    return capitalizedString;
}

console.log(capitalize('ciao'))
console.log(capitalize('mamma'))
console.log(capitalize('Guarda come Mi'))
console.log(capitalize('DIVERTO'))
console.log('*******************************')

// Scrivere una function che dati due parametri in ingresso controlla se siano numeri e torna il numero più piccolo:
console.log('Esercizio 3:')

function min(a, b){

    if(!isNaN(a) && !isNaN(b)) {
        return Math.max(a, b)
    } 

    return 'please insert a valid number'
}

console.log(min(1, 3))
console.log(min(5, -3))
console.log(min(100, 20))
console.log('*******************************')

// Scriviamo una function potenza che accetta due parametri: base ed esponente. Facciamo tornare alla funzione il numero "base" moltiplicato per se stesso tante volte quante indicate dall'esponente
console.log('Esercizio 4:')

function potenza(base, esponente){

    let totale = 1;
    for(let i = 0; i < esponente; i++) {
        totale = totale * base;        
    } 
    return totale;
}
// output:
console.log(potenza(4, 2))    // 16
console.log(potenza(5, 3))    // 125
console.log(potenza(1, 100)) // 1
// bonus point prevediamo anche l'elevamento a potenza con esponente 0.
console.log(potenza(4, 0))
console.log('*******************************')

// - Bonus point (opzionale):
//il fattoriale (n!) in matematica è il prodotto di un numero intero per tutti i numeri precedenti positivi (!==0).
// esempio: 5! (fattoriale di 5) è 5 * 4 * 3 * 2 * 1 = 120

// scriviamo una funzione ricorsia che calcola il fattoriale di un numero passato tramite parametro e lo stampa in console.
console.log('Esercizio Bonus:')

function fattoriale(n){

    if(n !== 1) {
        return n * fattoriale(n - 1) 
    }
    return 1;
}

console.log(fattoriale(5)) // 120
console.log(fattoriale(4)) // 24
