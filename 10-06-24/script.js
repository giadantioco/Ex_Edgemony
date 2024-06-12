// importa variabili da altri file js
// import { GET } from "./get.js"
import { API_KEY } from "./keys.js";
import { renderList } from "./renderCard.js";

// elementi HTML
const containerEl = document.querySelector(".container");
const prevNextBtnEl = document.querySelector(".pagesBtn-container");
const categoriesEl = document.querySelector('.dataTypeBtn-container')
const genresContainerEl = document.querySelector('.genres-container')


// variabile incrementa/decrementa numero pagina
let pageNumber = 1; // counter / valore iniziale predefinito
let actualEndpoint = 'movie/popular' // valore iniziale predefinito
let actualType = 'movie' // tipo di dati predefinito


//   Esercizio 1: Basandoci sulla lezione del giorno, convertiamo i nostri fetch/then con una funzione Async/Await riutilizzabile per più endpoint

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

const BASE_URL = "https://api.themoviedb.org/3/";

// https://api.themoviedb.org/3/movie/{movie_id}/lists

// https://api.themoviedb.org/3/discover/movie

//https://api.themoviedb.org/3/movie/popular

// API discover movies 
// 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28'

// query = 'with_genres=28'

// ASYNC ARROW FUNCTION
const GET = async (endpoint, page = 1, query) => {
  const response = await fetch(
    `${BASE_URL}${endpoint}?page=${page}&include_adult=false${query}`,
    options
  );

  const data = await response.json();

  // console.log(data);
  console.log('log di get',{
    page: data.page,
    endpoint,
    results: data
  })

  return data;
};

const render = async () => {
  const movieResponse = await GET(actualEndpoint, pageNumber);
  console.log(movieResponse)
  // console.log(GET('popular', 2))
  // console.log(GET('top_rated'))

  renderList(movieResponse.results, containerEl);
};

render();



// Esercizio 2: Implementiamo la paginazione in modo dinamico 

prevNextBtnEl.addEventListener("click", (e) => {
  const prevNextPageId = e.target.id;
  console.log(prevNextPageId)

  // let prevPage = e.target.tagName === 'BUTTON' && prevNextPageId === 'next-page'
  // let nextPage = e.target.tagName === 'BUTTON' && prevNextPageId === 'prev-page'

  if(e.target.tagName === 'BUTTON' && prevNextPageId === 'next-page') {
    pageNumber++;
    render();
  } 
  else if (e.target.tagName === 'BUTTON' && prevNextPageId === 'prev-page') {
    pageNumber--;
    render();
  }
});

// Esercizio 2: cambio tipo di dati "serie tv o movie"
// 2.0 -> resetto il pageNumber ad ogni click del bottone ad 1
// 2.1 -> creo due valiabili per i valori iniziali predefiniti da switchare all'interno della condizione

categoriesEl.addEventListener("click", (e) => {
  const categoryId = e.target.id;
  // console.log(dataTypeId)

  if (e.target.tagName === 'BUTTON') {
    actualEndpoint = `${categoryId}/popular`
    pageNumber = 1;
    render(actualEndpoint)
  }
  else {
    console.log('fuori')
  }
})

// Esercizio 3 (Opzionale): e se provassimo a filtrare per genere (genre)? stampata la lista di generi ci sono degli id, forse dobbiamo farlo con quello? o forse c'è un endpoint specifico?

console.log(await GET('genre/movie/list'))

const renderGenreList = async () => {
  // greo la lista di generi (UL)
  const genreListElement = document.createElement('ul')

  const genreListResponse = await GET('genre/movie/list')
  console.log(genreListResponse)

  // ogni movie (stampato movieresponse in render) ha degli genre_ids, quindi per selezionarlo mi interessa l'id
  genreListResponse.genres.forEach(genre => {
    //creo un LI per ogni elemento della lista di generi con il forEach
    const liEl = document.createElement('li')
    // ad ogni elemento assegno ID e NOME MOVIE contenuti nel genre (stampato genreListResponsezfzdz)
    liEl.id = genre.id
    liEl.textContent = genre.name

    console.log(liEl)
    //appendo elementi LI ad elemento UL
    genreListElement.append(liEl)
  })
  // appendo elemento UL (con LI appesi a sua volta) al div dell'HTML selezionato in alto (assieme agli altri)
  genresContainerEl.append(genreListElement)
  // console.log(genreListElement)
}
// richiamo la funzione 
renderGenreList()

// creo un event listener che al click aascolta l'evento e lo filtra sfruttando l'event bubbling (quindi lo creo sull genresContainerEl direttamente)
genresContainerEl.addEventListener('click', e => {
  // prendo il LI e l'ID dell'evento
  const tagName = e.target.tagName
  const id = e.target.id

  if (tagName === 'LI') {
    console.log('cliccato')
    pageNumber = 1;
    GET('/discover/movie', pageNumber, `with_genres=${id}`)
  }

})








// fetch("https://api.themoviedb.org/3/movie/popular?page=2", options)
//   // then - attesa della chiamata fetch
//   .then((res) => res.json())
//   // then - attesa della risposta json
//   .then((data) => {}

// let attempts = 0;
// const limit = 3;

// const fetchPopularMovies = async () => {
//   try {
//     const response = await fetch(
//       "https://api.themoviedb.org/3/movie/popular?page=2",
//       options
//     );
//     const data = await response.json();
//     console.log({ data });
//     throw new Error("error message");
//   } catch (e) {
//     console.log(e.message);
//     attempts += 1;
//     if (attempts < limit) {
//       fetchPopularMovies();
//     }
//   }
// };

// fetchPopularMovies();

// const sleep = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         name: "giada",
//       });
//     }, 3000);
//     // setTimeout(() => {
//     //     reject('something')
//     // }, 1000)
//   });
// };

// const main = async () => {
//   try {
//     const later = await sleep();
//     console.log(later);
//   } catch (e) {
//     console.log(e);
//   }
// };

// main();

// function mainTwo() {
//   sleep()
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }
// mainTwo();
