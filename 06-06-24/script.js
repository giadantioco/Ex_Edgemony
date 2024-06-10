// importa variabili da altri file js
import { cardElGenerator } from "./components.js";

const containerEl = document.querySelector('.container')
const btnContainer = document.querySelector('.btn-container')
// const loadBtn = document.querySelector(".load-btn")
// let products = [];


// aggiungo un bottone che mette in 'stop' il caricamento della pagina ed al click appaiono le cards ('wrappo' la fetch all'nterno del bottone con un event listener)
btnContainer.addEventListener('click', () => {
fetch('https://fakestoreapi.com/products')
.then((response) =>  response.json())
.then((data) => {
    
    // products = data;
    // console.log(data) 

    // richiamo funzione che genera una card, e con il metodo forEach genero tante card quante presenti in json (utilizzo il cobsole.log per ricordarmi che al contrario del metodo map che ha un return, forEach scorre un arrayma non ritorna niente, quindi non e' modificabile)
    console.log(data.forEach(card => {
        cardElGenerator(card.title, card.image)
    }))

    // richiamo funzione che genera input
    inputElGenerator()



    btnContainer.style.display = 'none';
    
    })
})


function inputElGenerator() {

    // creo la input bar e la appendo al suo contenitore
    const inputContainerEl = document.querySelector('.input-container')
    const inputEl = document.createElement('input')
    inputEl.classList.add('input')
    inputContainerEl.append(inputEl)

    // aggingo al contenitore l'event listener input
    inputContainerEl.addEventListener('input', (e) => {
        // creo una variabile dove salvo ilvalore dell'input immesso dall'utente
        const inputValue = e.target.value.toLowerCase() // converte l'input in minuscolo

        filterProducts(inputValue)
    })


}

function filterProducts(title) {
    const filteredProducts = products.filter(product => {
        return product.title.toLowerCase().includes(title) 
    })

    containerEl.innerHTML = "";
    filteredProducts.forEach((product) => {
        const renderedCards = cardElGenerator(product.title, product.image)
        containerEl.append(renderedCards)
    })
}