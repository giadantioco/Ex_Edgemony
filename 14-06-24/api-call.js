const BASE_URL = "https://api.escuelajs.co/"

const mainContainerEl = document.querySelector('.main-container');

const GET = async (id = '') => {
    const res = await fetch(BASE_URL + `api/v1/products/${id}`)

    const data = await res.json();

    return data
}


const POST = async (object) => {
    const res = await fetch(BASE_URL + "api/v1/products", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(object)
    });
    //salvo i dati in una variabile
    const data = await res.json(); // mando i dati al database
    console.log(data.id) //metto i dati inviati a console
    return data.id;
}


// https://api.escuelajs.co/api/v1/products/23?limit=8&offset=0

// const POST = async (product) => {
//     try {
//       const res = await fetch(`${BASE_URL}${getProductEndpoint}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(product),
//       });
//       const data = await res.json();
  
//       console.log(data)
  
//       if (data.error) {
//         if (product.categoryId === 0) {
//           data.message.push("category must be a positive number")
//         }
//         console.log(data)
//         throw data;
//       }
  
//       if (product.categoryId === 0) {
//         throw {
//           message: ["category must be a positive number"]
//         }
//       }
  
//       mainContainerEl.innerHTML = "";
//       return data.id;
  
//     } catch (err) {
//       errorHandler(err, mainContainerEl)
//     }
//   };
  


const PUT = async (id, object) => {
    const res = await fetch(BASE_URL + `api/v1/products/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(object)
    })

    const data = await res.json();

    return data
}

const PATCH = async (id, object) => {
    const res = await fetch(BASE_URL + `api/v1/products/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(object)
    })

    const data = await res.json();

    return data
}

const DELETE = async (id) => {
    const res = await fetch(BASE_URL + `api/v1/products/${id}`, {
        method: "DELETE"
    })

    const data = res.json();

    return data
}

export {
    GET, POST, PATCH, DELETE, PUT
}