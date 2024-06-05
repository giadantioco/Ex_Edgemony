import { artistForFun } from "./data/artistForFun.js";
import { cardElGen, cardListGen } from "./modules/components.js";

// generare tante card quanti sono i DJ nella lista

const cardsSectionEl = document.querySelector('.main')
const cardList = cardListGen();

for (let i = 0; i <= artistForFun.length -1; i++) {
    const cardEl = cardElGen(artistForFun[i])
    cardList.append(cardEl)
}

window.onload = cardsSectionEl.append(cardList)