// Funzione che renderizza una singola card
export const renderCard = (titleCard, image, container) => {
    const productCard = document.createElement('div');
        const title = document.createElement('p');
        const productImage = document.createElement('img');

        productCard.classList.add('product-card');
        title.textContent = titleCard;
        productImage.src = image;
  
      productCard.append(productImage, title);
      container.append(productCard);
  
      return titleCard
  }

  // query api configuration details
  // https://developer.themoviedb.org/reference/configuration-details
  // base_url -> "http://image.tmdb.org/t/p/"
  // file_size -> w500
  // file_ path -> poster_path | logo_path | 
  // combinando questi 3 elementi creo URL dell'immagine

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDFlMjkzY2Y3MjQ0MjQ0ZjJmYzk5ZmVkODNhZGE1MCIsInN1YiI6IjY2NjJkYWIxOTY2NjQ5YzA2YjA4OWNjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X0t0TdE7TgMo5kQZQLtGet6MAfk316g-t_i0U7Eh7fg'
    }
  };

  fetch('https://api.themoviedb.org/3/configuration', options) 
    .then(response => response.json())
    .then(response => console.log(response))


  // funzione di renderList, pulisce il container e renderizza un array di cards
  export const renderList = (dataList, container) => {
    container.innerHTML = "";

    dataList.forEach((product) => {
      // console.log(product)
        renderCard(
          product.title, 
          `https://image.tmdb.org/t/p/original${product.poster_path}`, 
          // product -> argomento passato
          // poster_path
          container
          );
          // console.log(renderCard)
      });
    console.log(dataList)
  }