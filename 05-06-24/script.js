const divEl = document.querySelector('.counter')
const pEl = document.createElement('p')

const btnStartEl = document.createElement('button')
const btnStopEl = document.createElement('button')

btnStartEl.classList.add('btn-start')
btnStartEl.textContent = 'Start'

btnStopEl.classList.add('btn-stop')
btnStopEl.textContent = 'Stop'

const newDate = new Date().toLocaleTimeString()

divEl.append(pEl, btnStartEl, btnStopEl)
console.log(divEl)


const intervalStart = () => {

    const startIntervalId = setInterval(() => {
    // intervalNumber = intervalNumber + 1;
    const printSec = pEl.textContent = new Date().toLocaleTimeString()
    // printSec.toLocaleTimeString()
    console.log(printSec)
    
    }, 1000)

    return startIntervalId;
}

let intervalId = intervalStart() // salviamo intervalId per fare il stop interval 

btnStartEl.addEventListener('click', function() {
    // console.log(intervalStart())
    clearInterval(intervalId) // stoppo l'intervallo che ho prima e faccio partire un intervallo nuovo -- MOLTO IMPORTANTE PER NON CREARE MEMORY LEAKs
    intervalId = intervalStart()// riassegno la variabile let intervalId per ricreare un nuovo ID appena clicco start
})

btnStopEl.addEventListener('click', function() {
    // console.log('click!')
    clearInterval(intervalId)
})


// ----------------------------------------------->  05-06-24

// Es. 1 - Event bubbling e propagazione eventi 
const headerEl = document.querySelector('header')
const h1El = document.createElement('h1')
h1El.textContent = 'Good Morning'
const openModalBtnEl = document.createElement('button')
openModalBtnEl.textContent = 'Open Modal Menu'
openModalBtnEl.id = 'open-modal';
const eventTargetBtnEl = document.createElement('button')
eventTargetBtnEl.textContent = 'Event Target'
eventTargetBtnEl.id = 'event-target';

headerEl.append(h1El, openModalBtnEl, eventTargetBtnEl)
console.log(headerEl)

headerEl.addEventListener('click', (e) => {
    const eventTarget = e.target;

    if(
        eventTarget.tagName === 'BUTTON' && 
        eventTarget.id === 'open-modal'
    ) {
        console.log('open modal btn')
    }
    else if (eventTarget.tagName === 'BUTTON') {
        console.log('event target btn')
    } 
    else {
        console.log('sono il titolo')
    }
})

// Es. 2 - global function
function globalFunction(e) {
    console.log('questa è una funzione globale', this)
    // console.log(`questo è l'event target`, e.target)
}
globalFunction()

eventTargetBtnEl.addEventListener('click', e => {
    console.log(e.target)
})

// MODALE 
const modalEl = document.querySelector('.modal')
modalEl.id = 'modal'
const closeModalBtnEl = document.createElement('button')
closeModalBtnEl.id = 'btn-close'
closeModalBtnEl.classList.add('btn-close')
closeModalBtnEl.textContent = 'x'
const yesBtnEl = document.createElement('button')
yesBtnEl.id = 'yes-btn'
yesBtnEl.classList.add('yes-btn')
yesBtnEl.textContent = 'YES'
const noBtnEl = document.createElement('button')
noBtnEl.id = 'no-btn'
noBtnEl.classList.add('no-btn')
noBtnEl.textContent = 'NO'


modalEl.append(closeModalBtnEl, yesBtnEl, noBtnEl)
console.log(modalEl)

// apri modale 
const openModal = () => {
    console.log('apro modal')
    modalEl.classList.remove('modal-hidden')
}

openModalBtnEl.addEventListener('click', openModal)

// Es. 4
let number = 0;
let interval;

modalEl.addEventListener('click', (e) => {
    const eventTarget = e.target;
    if (eventTarget.tagName === 'BUTTON' && eventTarget.id === 'yes-btn') {
        console.log('bottone yes')
    } else if (eventTarget.tagName === 'BUTTON' && eventTarget.id === 'no-btn') {
        console.log('bottone no')
    } else {

        modalEl.classList.add('modal-hidden')

        if (interval) {
            clearTimeout(interval)
        } 

        interval = setTimeout(()=> {
            number = ++number;
            console.log(number)
            modalEl.classList.add('modal-hidden')
        }, 5000) 

        // FUNZIONA AD INTEMITTENZA IL TIMER -.-' 
    }
})

