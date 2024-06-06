// let data = [];

const containerEl = document.querySelector('.container')
const btnContainer = document.querySelector('.btn-container')
const loadBtn = document.querySelector("load-btn")


btnContainer.addEventListener('click', () => {
fetch('https://fakestoreapi.com/products')
.then((response) =>  response.json())
.then((data) => {

    // console.log(data) 
    cardElGenerator(data)

    btnContainer.style.display = 'none';
    })
})


function cardElGenerator(cards) {
    cards.forEach(card => {

    const productCard = document.createElement('div')
    const title = document.createElement('p')
    const productImage = document.createElement('img')
    const rating = document.createElement('p')
    const btn = document.createElement('button')

    productCard.classList.add('product-card')
    title.classList.add('card-title')
    btn.classList.add('buy-btn')

    
    title.textContent = card.title;
    productImage.src = card.image  // url pescato dalla risposta de dati
    rating.textContent = `Rating: ${card.rating.rate}`
    btn.textContent = 'BUY'

    productCard.appendChild(title)
    productCard.appendChild(productImage)
    productCard.appendChild(rating)
    productCard.appendChild(btn)

    containerEl.appendChild(productCard)

    })
}