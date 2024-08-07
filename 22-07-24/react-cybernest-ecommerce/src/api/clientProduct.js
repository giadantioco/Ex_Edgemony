export const getProductList = async () => {
  try {
    const response = await fetch("http://localhost:3000/products");
    const data = response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw Error(error);
  }
};

export const getProductDetail = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const data = response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw Error(error);
  }
};

export const addItem = async () => {
  try {
  } catch (error) {}
};

// // simulazione chiamata API per aggiungere un nuovo elemento (POST)
// export const addItem = (body) => {
//   // body rappresenta i dati dell'elemento da aggiungere
//   return new Promise((resolve) => {
//     // la funzione restituisce una nuova promessa (questo simula un'operazione asincrona)
//     setTimeout(() => {
//       console.log("Saving Product: ", body);
//       // simulazione ritardo asincrono di 1000ms
//       resolve({
//         // dopo ritardo promessa risolta
//         // funzione che restituisce l'oggetto
//         ...body,
//         id: self.crypto.randomUUID(), // contiene tutte prop di body + id randomico geneerato dal metodo self.crypto.randomUUID
//       });
//     }, 3000);
//   });
// };

export const editItem = (body) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Editing Product: ", body);

      resolve(body);
    }, 3000);
  });
};

export const deleteItem = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Deleting Product: ", id);

      resolve(id);
    }, 500);
  });
};
