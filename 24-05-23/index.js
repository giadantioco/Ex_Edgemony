// CIAO GIUSEPPE! Grazie per la correzione, buona giornata! :) 

/*

inseriamo in HTML il seguente codice dentro il body:

```html

<div class="container">
    <h1 title="Titolo" id="heading">Ciao classe!</h1>
    <h2 id="kicker">benvenuti nel mondo del DOM</h2>
    <p class="description">Testo a caso</p>

    <button>Canel</button>
    <button>Click me!</button>
</div>

```

#### Selettori

- Usando il querySelector prendiamo l'elemento con id `heading` ed eseguiamo un console.log

```
// output <h1>...</h1>
```

- Per ogni elemento `button` presente in pagina stampiamo in console il suo testo.

```js

const buttonEls = document.querySelectorAll('button');

for(...){
    console.log(...);
}

// output 
// cancel
// Click me!
```

#### Contatore

- salviamo due variabili con dentro i riferimenti ai due button della pagina `resetBtn` e `clickBtn`;
- inseriamo una function dentro l'evento `onclick` di `clickBtn` e per ogni click:
- leggiamo il valore attuale del proprio innerHTML
    - convertiamo il valore a numero, se NaN portiamolo a 0;
    - incrementiamo il valore precedente e salviamolo in innerHTML;

- inseriamo una function dentro l'evento `onclick` di `resetBtn` e per ogni click impostiamo innerHTML di `clickBtn` a "0";

```js

const resetBtn = document.querySelector(..);
const clickBtn = document.querySelector(..);

resetBtn.onclick = function(){
    // portare clickBtn.innerHTML a "0"
}

clickBtn.onclick = function(){
    // se stringa portare clickBtn.innerHTML a "0"
    // se numero incrementare e salvare il valore
}


```

*/

// <----------------------------------  ESERCIZI  --------------------------------------->

// Esercizio 1: 

console.log('Esercizio 1:')
//- Usando il querySelector prendiamo l'elemento con id `heading` ed eseguiamo un console.log
const headingEl = document.querySelector('#heading');
console.log(headingEl)

//- Per ogni elemento `button` presente in pagina stampiamo in console il suo testo.
const buttonEls = document.querySelectorAll('button');

for(button of buttonEls){
    console.log(button);
}
console.log('****************************************')

// Esercizio 2: 
/*
#### Contatore

- salviamo due variabili con dentro i riferimenti ai due button della pagina `resetBtn` e `clickBtn`;
- inseriamo una function dentro l'evento `onclick` di `clickBtn` e per ogni click:
- leggiamo il valore attuale del proprio innerHTML
    - convertiamo il valore a numero, se NaN portiamolo a 0;
    - incrementiamo il valore precedente e salviamolo in innerHTML;

- inseriamo una function dentro l'evento `onclick` di `resetBtn` e per ogni click impostiamo innerHTML di `clickBtn` a "0";

```js

const resetBtn = document.querySelector(..);
const clickBtn = document.querySelector(..);

resetBtn.onclick = function(){
    // portare clickBtn.innerHTML a "0"
}

clickBtn.onclick = function(){
    // se stringa portare clickBtn.innerHTML a "0"
    // se numero incrementare e salvare il valore
}
*/
console.log('Esercizio 2:')
// - salviamo due variabili con dentro i riferimenti ai due button della pagina `resetBtn` e `clickBtn`;
const resetBtn = document.querySelector('button:first-of-type');
const clickBtn = document.querySelector( 'button:last-of-type');

// - inseriamo una function dentro l'evento `onclick` di `clickBtn` e per ogni click:
    // - leggiamo il valore attuale del proprio innerHTML
    // - convertiamo il valore a numero, se NaN portiamolo a 0;
    // - incrementiamo il valore precedente e salviamolo in innerHTML;
clickBtn.onclick = function(){
    // leggiamo il valore attuale del proprio innerHTML
    let currentValue = clickBtn.innerHTML;
    let numberValue = parseInt(currentValue)
    // se stringa portare clickBtn.innerHTML a "0"
    if(isNaN(numberValue)) {
        numberValue = 0;
    }
    // se numero incrementare e salvare il valore
    clickBtn.innerHTML = numberValue + 1;
}

// - inseriamo una function dentro l'evento `onclick` di `resetBtn` e per ogni click impostiamo innerHTML di `clickBtn` a "0";

resetBtn.onclick = function(){
    // portare clickBtn.innerHTML a "0"
    clickBtn.innerHTML = '0'
}