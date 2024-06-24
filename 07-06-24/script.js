// importa variabili da altri file js
import { API_KEY } from "./keys.js";
import { renderList } from "./renderCard.js";

// elementi HTML 
const containerEl = document.querySelector(".container");
const searchBarEl = document.querySelector(".searchbar");
const buttonPageTwo = document.querySelector(".page2")
const buttonPopular = document.querySelector('.most-popular')
const buttonTopRated = document.querySelector('.top-rated')
const btnContainer = document.querySelector('.btn-container')


// Object options richiesto dall'API Moviedb affinchè la nostra chiamata sia autorizzata.
const options = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };


// Esercizio 1: Effettuiamo la chiamata all'API di MovieDB e stampiamo a DOM le card dei movies ottenuti all'endpoint /popularhttps://developer.themoviedb.org/reference/movie-popular-list


// promise GET -> fetch
// page=2 -> la paginachiamata 
fetch("https://api.themoviedb.org/3/movie/popular?page=2", options)
  // then - attesa della chiamata fetch
  .then((res) => res.json())
  // then - attesa della risposta json
  .then((data) => {

    // Esercizio 3 (Opzionale): Proviamo a filtrare i risultati con una searchBar.
    
    // data -> parametro passato da then
    // .results -> array di oggetti film 
    const movies = data.results
    // console.log(movies)

    // renderizziamo la lista di movies
    renderList(movies, containerEl);
    // console.log(renderList)

    searchBarEl.addEventListener("input", (event) => {
      const inputValue = event.target.value.toLowerCase();
      filterProducts(inputValue, movies);
    });
  })


// Esercizio 2: Inseriamo un catch a fine catena then per gestire eventuali errori (provate a crearne uno per assicurarvi il corretto funzionamento del catch - poi potete anche lasciare il codice funzionante)


  // Catturiamo l'errore e gestiamo il comportamento dell'app
  .catch((err) => {
    console.error("SONO l'ERRORE", err);

    const title = document.createElement("h1");
    title.textContent = "Errore nel caricamento dei prodotti";

    containerEl.append(title);
  });

function filterProducts(title, data) {
  const filteredProducts = data.filter((product) => {
    return product.title.toLowerCase().includes(title);
  });

  containerEl.innerHTML = "";
  renderList(filteredProducts, containerEl);
}
console.log(filterProducts)

// Esercizio 4 (Opzionale): L'oggetto response, ci da a disposizione il valore page, proviamo a paginare! la documentazione ci da qualche suggerimento.

// raccogli la fetch all'interno di un bottone alla quale attacchi un event listener (nel caso fossero piu' pagine si raccoglgono i bottoni in un div alla quale si applica un eventlistener e con le condizioni si decide quale pagina attivare )

// se il bottone funziona..
if(buttonPageTwo) {
    // al click esegiu la fetch
buttonPageTwo.addEventListener( "click", () => {
     // page=3 -> la pagina variata 
    fetch("https://api.themoviedb.org/3/movie/popular?page=3", options) 
   

  // then - attesa della chiamata fetch
  .then((res) => res.json())
  // then - attesa della risposta json
  .then((data) => {
    
    const movies = data.results

    // renderizziamo la lista di movies
    renderList(movies, containerEl);

    searchBarEl.addEventListener("input", (event) => {
      const inputValue = event.target.value.toLowerCase();
      filterProducts(inputValue, movies);
    });
  })

  // Catturiamo l'errore e gestiamo il comportamento dell'app
  .catch((err) => {
    console.error("SONO l'ERRORE", err);

    const title = document.createElement("h1");
    title.textContent = "Errore nel caricamento dei prodotti";

    containerEl.append(title);
  })

})
// se il bottone non funziona.. 
} else {
    console.log('bottone non trovato')
}

// Esercizio 5 (Opzionale pazzo): e se facessimo dei bottoni che al click cambiano l'endpoint tipo di default stampate /popular  come da Es1 e al click di un button per esempio "TOP_RATED" /top_rated https://developer.themoviedb.org/reference/movie-top-rated-list

if(btnContainer) {

btnContainer.addEventListener('click', (e) => {
    // const categoryClass = e.target.class; 

    if(buttonPopular) {

         
      fetch("https://api.themoviedb.org/3/movie/popular", options) 
       
    
      // then - attesa della chiamata fetch
      .then((res) => res.json())
      // then - attesa della risposta json
      .then((data) => {
        
        const movies = data.results
        console.log(movies)
    
        // renderizziamo la lista di prodotti
        renderList(movies, containerEl);
    
        searchBarEl.addEventListener("input", (event) => {
          const inputValue = event.target.value.toLowerCase();
          filterProducts(inputValue, movies);
        });
      })
    
      // Catturiamo l'errore e gestiamo il comportamento dell'app
      .catch((err) => {
        console.error("SONO l'ERRORE", err);
    
        const title = document.createElement("h1");
        title.textContent = "Errore nel caricamento dei prodotti";
    
        containerEl.append(title);
        })
      }
      else if (buttonTopRated) {
        // stampa i film top_rated
        fetch("https://api.themoviedb.org/3/movie/top_rated", options) 
       
    
      // then - attesa della chiamata fetch
      .then((res) => res.json())
      // then - attesa della risposta json
      .then((data) => {
        
        const movies = data.results
    
        // renderizziamo la lista di movies
        renderList(movies, containerEl);
    
        searchBarEl.addEventListener("input", (event) => {
          const inputValue = event.target.value.toLowerCase();
          filterProducts(inputValue, movies);
        });
      })
    
      // Catturiamo l'errore e gestiamo il comportamento dell'app
      .catch((err) => {
        console.error("SONO l'ERRORE", err);
    
        const title = document.createElement("h1");
        title.textContent = "Errore nel caricamento dei prodotti";
    
        containerEl.append(title);
        })
      }
    
    })
} else {
    console.log('bottone non trovato')
}



// Esercizio 1: Basandoci sulla lezione del giorno, convertiamo i nostri fetch/then con una funzione Async/Await riutilizzabile per più endpoint
// Esercizio 2: Implementiamo la paginazione per chi non l'ha già fatto, in modo dinamico + cambio tipo di dati "serie tv o movie"
// Esercizio 3 (Opzionale): e se provassimo a filtrare per genre? stampata la lista di generi ci sono degli id, forse dobbiamo farlo con quello? o forse c'è un endpoint specifico? :redfish: :canna_da_pesca_e_pesce:
// Buon divertimento e al solito, il punto 3 lo rivedremo a lezione insieme