// prendo elementi dall'html
const inputTitleEl = document.querySelector('.title')
const inputPriceEl = document.querySelector('.price')
const inputDescriptionEl = document.querySelector('.despription')
const inputCategoryEl = document.querySelector('.category-id')
const inputImagesEl = document.querySelector('.images')
const buttonSendEl = document.querySelector('.button-send')

// controlo che tutti gli elementi non siano null 
console.log('inputTitleEl:', inputTitleEl);
console.log('inputPriceEl:', inputPriceEl);
console.log('inputDescriptionEl:', inputDescriptionEl);
console.log('inputCategoryEl:', inputCategoryEl);
console.log('inputImagesEl:', inputImagesEl);
console.log('buttonSendEl:', buttonSendEl);

const BASE_URL = 'https://api.escuelajs.co/'
const getProductEndpoint = 'api/v1/products'
const url = BASE_URL + getProductEndpoint


// Esercizio 3: Gestiamo gli eventuali errori per esempio dentro la POST  come abbiamo visto insieme sfruttando trycatch statement, va benissimo un errore in console log customizzato, l'importante è che passi dal catch!

const POST = async () => {
    
    try {
        const res = fetch(url, {
            method: 'POST',
            headers: {
                //accept: 'application/json'
                "Content-Type": 'application/json; charset=utf-8'
            },
            // in piu rispetto al metodo get perche bisogna passare un dato (all'interno di body).stringify(per passarlo convertito come stringa)
            body: JSON.stringify({
                "title":"aefrae",
                "price":5,
                "description":"aefesffa",
                "categoryId":1,
                "images":[
                   "https://ascdasd.asf"
                ]
             })
        
        })
        // risposta HTTP
        console.log('risposta http:', res)

        if(!res.ok) {
            const errorText = await res
            // ottiene il testo di errore dal server
            throw new Error(`richiesta non andata a buon fine ${res.status} it testo di errore è il seguente ${errorText}`)
        }

        const data = await res.json()
        console.log('dati in risposta:', data)
        return data.id

    } catch (error) {
        console.log('errore della fetch:', error.message)
        console.error('Testo di errore:', error);
        return null
    }   
}


buttonSendEl.addEventListener('click', async (e) => {
    // inputTitleEl.value
    e.preventDefault()
    const objProductForm = {
        title: inputTitleEl.value,
        price: parseFloat(inputPriceEl.value), //Assicurati che il prezzo sia un numero
        description: inputDescriptionEl.value,
        categoryId: parseInt(inputCategoryEl.value), //Assicurati che sia un numero intero
        images: [inputImagesEl.value]
    }
    /// Log dei dati inviati per debugging
    console.log(JSON.stringify(objProductForm));

    if (!objProductForm.title || !objProductForm.price || !objProductForm.description || !objProductForm.categoryId || !objProductForm.images[0]) {
        console.error('Tutti i campi sono obbligatori');
        return;
    }

    const productId = await POST(objProductForm)

    console.log(`product ID: ${productId}`)

    if (productId) {
        console.log(`product id: ${productId}`)
    } else {
        console.log('prodotto non creato')
    }
})


// //offset -> sposta l'indice di 8 (se il limite impostato è 8)

// // fetch(`${BASE_URL}${getProfuctEndpoint}?limit=8&offset=0`)
// // .then((res) => res.json())
// // .then(data => console.log(data))

// // È buona pratica creare una function per prender l'elemento creato, per poi poterli cancellare con il metodo DELETE 
// const getById = async (id) => {
//     const res = await fetch(`${BASE_URL}${getProductEndpoint}/${id}`, {
//         method: 'GET'
//     })

//     const data = await res.json()

//     console.log(data)
// }

// // Esercizio 2: Dopo averlo modificato cancelliamolo con il metodo DELETE


// // // metodo DELETE -> permette dieliminare oggetti creati tramite loro id
// // // funzione che eliminerà un dato dalla nostra API tramite il suo ID
// const deleteById = async (id) => {
//     const res = await fetch(`${BASE_URL}${getProductEndpoint}/${id}`, {
//         method: "DELETE"
//     })

//     const data = await res.json()

//     console.log(data)
// }

// // // metodo POST -> consente di aggiungere oggetti (prodotti) all'interrno della pagina. Lo si fa attraverso l'oggetto

// // Esercizio 1: Abbiamo visto oggi la possibilità di utilizzare altri due metodi http ovvero PUT  e PATCH , sempre sulla base della fantastica api: https://api.escuelajs.co/ dopo aver creato un prodotto con il metodo POST modifichiamolo in parte o interamente, verificate che effettivamente il nostro prodotto è stato aggiornato sul database facendo un getById dello stesso

// // // Metodo PUT

// const PUT = async (id, product) => {
//     const res = await fetch(`${BASE_URL}${getProductEndpoint}/${id}`, {
//         headers: {
//             "Content-Type": 'application/json;'
//         },
//         body: JSON.stringify(product)
//     })

//     const data = res.json()

//     return data
// }

// getById(3)

// const staticProduct = {
//     title: 'ASDASD'
// }

// const editById = async (id, product) => {
//     console.log(await PUT(id, product))
// }

// editById(35, staticProduct)