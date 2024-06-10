import { API_KEY } from "./keys.js";
// import { renderList } from "./renderCard.js";


const options = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };


// export const GET = (container) => {
//     fetch("https://api.themoviedb.org/3/movie/popular?page=2&include_adult=false", options)
//     .then((res) => res.json())
//     .then((data) => {
//     renderList(data.results, container)
// }).catch(err => {
//     console.log(err)
// })
// }


export const GET = async (endpoint, page = 1) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${endpoint}?page=${page}&include_adult=false`, 
        options
    ) 

    const data = await response.json()

    console.log(data)
    return data
}

