import { DELETE, GET, PATCH, POST, PUT } from "./api-call.js";


const inputTitleEl = document.querySelector('.title');
const inputPriceEl = document.querySelector('.price');
const inputDescriptionEl = document.querySelector('.description');
const inputCategoryEl = document.querySelector('.category-id');
const inputImagesEl = document.querySelector('.images');
const buttonSendEl = document.querySelector('.button-send');
// const inputSearchById = document.querySelector('.check-id');
// const buttonSearchById = document.querySelector('.check-id-button');


console.log(inputPriceEl)

// al click creo una funzione che prende la value all'interno degli input
buttonSendEl.addEventListener('click', e => {
    // è una form quindi necessario e.preventDefault(), altrimenti refrecha ogni volta la pagina
    e.preventDefault()
    // salvo l'oggetto da passare all'API tramite POST in una variabile
    const postedObject = {
        title: inputTitleEl.value,
        price: inputPriceEl.value,
        description: inputDescriptionEl.value,
        category: inputCategoryEl.value,
        images: [inputImagesEl] // in questa API va salvata cosí l'immagine
    }
    POST(postedObject)
})



// const updateProduct = {};
// let id = ""

// buttonSearchById.addEventListener('click', async (e) => {
//     id = inputSearchById.value

//     // const result = await GET(id)
//     // console.log(result)
//     // inputTitleEl.value = result.title
//     // inputPriceEl.value = result.price
//     // inputDescriptionEl.value = result.description
//     // inputCategoryEl.value = result.category.id
//     // inputImagesEl.value = result.images.join('').replace(/[\[\]"]/g, '');
// })

// buttonSendEl.addEventListener('click', async (e) => {
//     // inputTitleEl.value
//     e.preventDefault()
//     const objProductForm = {
//         title: inputTitleEl.value,
//         price: parseFloat(inputPriceEl.value), //Assicurati che il prezzo sia un numero
//         description: inputDescriptionEl.value,
//         categoryId: parseInt(inputCategoryEl.value), //Assicurati che sia un numero intero
//         images: [inputImagesEl.value]
//     }
//     /// Log dei dati inviati per debugging
//     console.log(JSON.stringify(objProductForm));

//     const productId = await POST(objProductForm)

//     console.log(`product ID: ${productId}`)

//     if (productId) {
//         console.log(`product id: ${productId}`)
//     } else {
//         console.log('prodotto non creato')
//     }
// })



// buttonSendEl.addEventListener('click', async e => {
//     e.preventDefault();

//     console.log(e)
//     const objProductForm = {
//         title: inputTitleEl.value,
//         price: Number(inputPriceEl.value),
//         description: inputDescriptionEl.value,
//         categoryId: Number(inputCategoryEl.value),
//         images: [inputImagesEl.value]
//     };

//     const productId = await POST(objProductForm)

//     console.log("log al click", productId);
// })



// BUTTON SEND RIVISITATO DA MARCO
// buttonSendEl.addEventListener('click', async (e) => {

//     console.log(e)
//     if (inputTitleEl.value === "") {
//         console.log('scrivi qualcosa')
//     }
//     updateProduct.title = inputTitleEl.value;
//     updateProduct.price = inputPriceEl.value;
//     updateProduct.description = inputDescriptionEl.value;
//     updateProduct.categoryId = inputCategoryEl.value;
//     updateProduct.images = [inputImagesEl.value];

//     // const editedProd = await PUT(id, updateProduct);

//     // console.log(editedProd);
// });

// const mainContainerEl = document.querySelector('.main-container');

// const myUrl = new URL("https://api.escuelajs.co/api/v1/products/23?limit=8&offset=0")

// console.log(myUrl)

// console.log(myUrl.searchParams.set('miosearchparam', 'valoreasd'))

// const newProduct = {
//     title: "Funziona",
//     price: 55,
//     description: "ciao ciao",
//     categoryId: 2,
//     images: ["https://asd.asd/"]
// }

// const updateProduct = {
//     title: "modificato",
// }

// const postResult = await POST(newProduct)

// console.log(postResult);

// console.log(await GET(88));

// // La patch non funziona
// const updateProductTitle = await PATCH(88, updateProduct)

// console.log(updateProductTitle)

// const putResult = await PUT(88, updateProduct)

// console.log(putResult)

// const deletedItem = await DELETE(88)

// console.log(deletedItem)

//verifico che l'elemento con id 88 sia stato eliminato 
// console.log(await GET(88));
