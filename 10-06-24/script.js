// importa variabili da altri file js
import { GET } from "./get.js"
// import { API_KEY } from "./keys.js";
import { renderList } from "./renderCard.js";

// elementi HTML 
const containerEl = document.querySelector(".container");
const searchBarEl = document.querySelector(".searchbar");
// const buttonPageTwo = document.querySelector(".page2")
// const buttonPopular = document.querySelector('.most-popular')
// const buttonTopRated = document.querySelector('.top-rated')
// const btnContainer = document.querySelector('.btn-container')



//   Esercizio 1: Basandoci sulla lezione del giorno, convertiamo i nostri fetch/then con una funzione Async/Await riutilizzabile per più endpoint

const movieResponse = await GET()

console.log(movieResponse)

// console.log(GET(popular, 2))

// console.log(GET(top_rated))

renderList(movieResponse.results, containerEl)

