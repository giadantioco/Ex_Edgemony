import { artistForFun } from "./data/artistForFun.js";
import { cardElGen, cardListGen } from "./modules/components.js";

// generare tante card quanti sono i DJ nella lista

const newArtist = {
        id: 10,
        name: 'Ben Klock',
        type: 'Techno',
        image: "./img/klock.webp"
};

const cardsSectionEl = document.querySelector('.main')
const btnAdd = document.querySelector('.btn-add');

const renderListCard = () => {
    // Svuotiamo ilcontenuto dell'elemento mainsectionEl per evitare duplicati
    // Attenzione: ho scelto questa soluzione per ridurre al minimo le operazioni da scrivere ed eseguire sul DOM
    cardsSectionEl.innerHTML = '';

    const cardList = cardListGen();

    for (let i = 0; i <= artistForFun.length -1; i++) {
        const cardEl = cardElGen(artistForFun[i])
        cardList.append(cardEl)
}
    return cardList;
}

window.onload = cardsSectionEl.append(renderListCard())


btnAdd.addEventListener('click', function () {
    // aggiungiamo il nuovo dj all'array DJs
    artistForFun.push(newArtist)
    // resettiamoe aggiorniamo la visualizzazione delle cards
    // Questo passaggio è necessario per evitare duplicati delle card già esistenti.
    
    // cardsSectionEl.append()
    cardsSectionEl.append(renderListCard())
})