// CIAO GIUSEPPE! Come sempre grazie mille della correzione e buon proseguimento di giornata! 
// Mi ha fatto piacere poter associare il tuo nome ad un volto! Purtroppo non ho potuto fare altrettanto perchè sono connessa dall'hotspot, ma sono certa che avremo modo di rivederci presto! :) 
// P.S. Il mio commento in merito al feedback era solo per dire che come ricevo feedback negativi, avrei piacere a riceverne di positivi o di neutri, giusto per capire se sono diretta dalla parte giusta! 
// Grazie ancora!! :D 

/*

#### Creazioni elementi:

Aggiungiamo al nostro HTML tramite JS due nuovi elementi: un h1 ed un paragrafo.
Usiamo il metodo document.createElement per creare i vari elementi 
Per inserirli nella pagina usiamo rispettivamente: insertAdjacentElement() per h1, e append() per il <p>.


#### Button contatore dinamico:

- Aggiungiamo nella nostra pagina, dopo il paragrafo, un <button>0</button>.
- Al button associamo un evento `onmouseenter` che cambierà lo style del button (sperimentiamo un po');
- Al button associamo un altro evento `onclick` che al click aumenta di uno il numero inserito nel proprio innerHTML;


#### Lista di nomi:

Insieriamo all'interno della pagina HTML un elemento form secondo quanto riportato sotto:

```html

<form>
    <div>
        <label for="nomi">Lista nomi e cognomi</label>
        <input 
            id="nomi" 
            name="nomi" 
            type="text" 
            minlength="3" 
            autocomplete="off" 
        />
    </div>

    <button type="submit">Invia</button> 
</form>

<ul class="list"></ul>

```

Usiamo JS per inserire all'evento `onsubmit` una function che:
- previene il comportamento di default del form.
- Quindi prendere il valore dell'input, controllare che sia una stringa valida e che abbia almeno uno spazio all'interno;
- Se il valore è valido creare un elemento <li> e inserirlo dentro l'elemento `.list` (vedi HTML)
- Aggiungere una function al `onclick` del nuovo elemento <li> e stampare un console.log() quando viene eseguito il click.

```js

const formEl = // ...;
const inputEl = // ...;

formEl.onsubmit = function(event){

    event. /// eseguiamo un particolare metodo...

    const inputValue = // ...

    if(...){
        
    }
}

```
*/

// <----------------------------------  ESERCIZI  --------------------------------------->

// Esercizio 1:
//#### Creazioni elementi:
// Aggiungiamo al nostro HTML tramite JS due nuovi elementi: un h1 ed un paragrafo.
// Usiamo il metodo document.createElement per creare i vari elementi 
// Per inserirli nella pagina usiamo rispettivamente: insertAdjacentElement() per h1, e append() per il <p>.

console.log('Esercizio 1:')

const h1El = document.createElement('h1')
const pEl = document.createElement('p')
const divEl = document.querySelector('div')

divEl.insertAdjacentElement("beforeend", h1El)
h1El.append(pEl)

console.log(h1El, pEl)
console.log('***************************')

// Esercizio 2:
// #### Button contatore dinamico:

// - Aggiungiamo nella nostra pagina, dopo il paragrafo, un <button>0</button>.
// - Al button associamo un evento `onmouseenter` che cambierà lo style del button (sperimentiamo un po');
// - Al button associamo un altro evento `onclick` che al click aumenta di uno il numero inserito nel proprio innerHTML;

buttonEl = document.createElement('button')
pEl.insertAdjacentElement("afterend", buttonEl)
buttonEl.innerHTML = '0';
buttonEl.onmouseenter = function(event) {
    console.log(event)
    this.style.backgroundColor = 'rebeccapurple'
    this.style.color = 'white'
}
buttonEl.onclick = function(event) {
    console.log(event)
    const counter = this.innerHTML;
    const count = Number(counter);
    this.innerHTML = count + 1;
}

// Esercizio 3:
// #### Lista di nomi:
// Usiamo JS per inserire all'evento `onsubmit` una function che:
// - previene il comportamento di default del form.
// - Quindi prendere il valore dell'input, controllare che sia una stringa valida e che abbia almeno uno spazio all'interno;
// - Se il valore è valido creare un elemento <li> e inserirlo dentro l'elemento `.list` (vedi HTML)
// - Aggiungere una function al `onclick` del nuovo elemento <li> e stampare un console.log() quando viene eseguito il click.

const formEl = document.querySelector('form')
const inputEl = document.querySelector('input')
const ulEl = document.querySelector('.list')

formEl.onsubmit = function(event){

    event.preventDefault()

    const inputValue = inputEl.value.trim()
    if(inputValue && inputValue.includes(' ')){
        const liEl = document.createElement('li')
        ulEl.append(liEl)
        liEl.innerText = inputValue
        inputEl.value = ''
        liEl.onclick = function() {
            console.log(this.innerText)
        }
    }
}

