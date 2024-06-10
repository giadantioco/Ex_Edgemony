// funzione che genera una card

export function cardElGenerator(title, image) {

    const containerEl = document.querySelector('.container')
  
    const productCard = document.createElement('div')
    const titleCard = document.createElement('p')
    const productImage = document.createElement('img')
    // const ratingCard = document.createElement('p')
    const btn = document.createElement('button')

    productCard.classList.add('product-card')
    titleCard.classList.add('card-title')
    btn.classList.add('buy-btn')

    
    titleCard.textContent = title;
    productImage.src = image  // url pescato dalla risposta de dati
    // ratingCard.textContent = `Rating: ${rating.rating.rate}`
    btn.textContent = 'BUY'

    productCard.appendChild(productImage)
    productCard.appendChild(titleCard)
    // productCard.appendChild(ratingCard)
    productCard.appendChild(btn)

    containerEl.appendChild(productCard)

}