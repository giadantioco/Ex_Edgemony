import { getHeaderHTML } from "./components/header.js";
import { getMainHTML } from "./components/main.js";
import { getFooterHTML } from "./components/footer.js";

// Realizzare una pagina web usando JS
// header + sidebar + lista articoli + footer
// Single Page Application - JS

window.addEventListener("DOMContentLoaded", () => {
  console.log("ciao mondo, la pagina si è caricata");

  const appEl = document.querySelector("#app");
  appEl.classList.add("app");

  if (appEl) {
    // dentro la function sono sicuro che appEl sia un elemento caricato nel dom
    renderPage(appEl);
  }
});

function renderPage(appEl) {
  // appEl.innerHTML = 'Ciao Mondo!';

  // andare a creare una function per ogni elemento della pagina;
  // ogni function mi torna dell'HTML, e una volta messi insieme li stampo.

  const header = getHeaderHTML();
  const main = getMainHTML();
  const footer = getFooterHTML();

  const html = header + main + footer;

  appEl.innerHTML = html;

  // const asideEl = document.querySelector('aside');
  // createElement('div', {className: 'prova-class', innerHTML: 'ciao mondo', 'data-count': 0}, asideEl)
}

// function per creare elementi
function createElement(element, attrs = {}, parent = document.body) {
  // creo elemento
  const el = document.createElement(element);

  // attributi per me sono un object, posso iterarlo
  // const keys = Object.keys(attrs);
  // keys.forEach((prop) => {
  //     if(prop in el){
  //         el[prop] = attrs[prop];
  //         // se l'ho impostat vado avanti nel for e non eseguo il resto per questo elemento
  //         return;
  //     }

  //     el.setAttribute(prop, attrs[prop]);
  // })

  for (let prop in attrs) {
    // se la proprietà (ex. className) esite la imposto
    if (prop in el) {
      el[prop] = attrs[prop];
      // se l'ho impostat vado avanti nel for e non eseguo il resto per questo elemento
      continue;
    }

    el.setAttribute(prop, attrs[prop]);
  }

  parent.append(el);
}

// - holy grail css flex
// - holy grail css grid
// - creare spa per mostrare lista post usando https://jsonplaceholder.typicode.com/posts
// - Bonus: implementare il map
