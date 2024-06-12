// ----------------------------------------------------------

// const testObj = { 
//     title: 'string',
//     price: 10,
//     description: 'string',
//     categoryId: 10,
//     images: ['http://asd.asd']
// }

// prendo elementi dall'html
const inputTitleEl = document.querySelector('.title')
const inputPriceEl = document.querySelector('.price')
const inputDescriptionEl = document.querySelector('.description')
const inputCategoryEl = document.querySelector('.category-id')
const inputImagesEl = document.querySelector('.images')
const buttonSendEl = document.querySelector('.button-send')

console.log(inputPriceEl)

buttonSendEl.addEventListener('click', e => {
    // inputTitleEl.value
    e.preventDefault()
    const objProductForm = {
        title: inputTitleEl.value,
        price: inputPriceEl.value,
        description: inputDescriptionEl.value,
        categoryId: inputCategoryEl.value,
        images: [inputImagesEl.value]
    }
    POST(objProductForm)
})


const BASE_URL = 'https://api.escuelajs.co/'

const getProductEndpoint = 'api/v1/products'

//offset -> sposta l'indice di 8 (se il limite impostato è 8)

// fetch(`${BASE_URL}${getProfuctEndpoint}?limit=8&offset=0`)
// .then((res) => res.json())
// .then(data => console.log(data))

// È buona pratica creare una function per prender l'elemento creato, per poi poterli cancellare con il metodo DELETE 
const getById = async (id) => {
    const res = await fetch(`${BASE_URL}${getProductEndpoint}/${id}`, {
        method: 'GET'
    })

    const data = await res.json()

    console.log(data)
}

// metodo DELETE -> permette dieliminare oggetti creati tramite loro id
// funzione che eliminerà un dato dalla nostra API tramite il suo ID
const deleteById = async (id) => {
    const res = await fetch(`${BASE_URL}${getProductEndpoint}/${id}`, {
        method: "DELETE"
    })

    const data = await res.json()

    console.log(data)
}

// metodo POST -> consente di aggiungere oggetti (prodotti) al'interrno della pagina. Lo si fa attraverso l'oggetto

const POST = async (product) => {
    const res = fetch(`${BASE_URL}${getProductEndpoint}`, {
        method: 'POST',
        headers: {
            //accept: 'application/json'
            "Content-Type": 'application/json'
        },
        // in piu rispetto al metodo get perche bisogna passare un dato (all'interno di body).stringify(per passarlo convertito come stringa)
        body: JSON.stringify(product)
        
    })

    const data = await res.json()
    // console.log(data.images.map(img => img.split('"')[1])) // map restituisce l'array, per stampare le cards a schermo
    return data.id
}

getById()

// console.log(await POST())



// quando mando un oggetto al backend, il backend  mi risponde con l'api aggiornata con i dati richiesti
