// Funzione che renderizza una singola card
export const renderCard = (titleCard, image, container) => {

        const productCard = document.createElement('div');
        const title = document.createElement('p');
        const productImage = document.createElement('img');

        productCard.classList.add('product-card');
        title.textContent = titleCard;
        productImage.src = `https://image.tmdb.org/t/p/w500${image}`;
  
      productCard.append(productImage, title);
      container.append(productCard);
  
      return titleCard
  }

  // funzione di renderList, pulisce il container e renderizza un array di cards
  export const renderList = (dataList, container) => {
    container.innerHTML = "";

    dataList.forEach((item) => {
      // console.log(product)
        renderCard(
          item.title, 
          item.backdrop_path, 
          container
          );
          // console.log(renderCard)
      });
    console.log(dataList)
  }
