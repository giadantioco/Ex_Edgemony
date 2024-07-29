export const getProductList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // reject({ message: "errore" });
      resolve(() => {
        return [
          {
            id: "1",
            isbn: "0-3733-1808-1",
            item: "APPLE - iPhone 15 128GB",
            category: "smartphone",
            quantity: 15,
            cover:
              "https://www.phoneclick.it/img/catalogo/a25%205g%20128gb%20blue.jpg",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            id: "2",
            isbn: "0-3733-1808-1",
            item: "SAMSUNG - GALAXY A25 5G 128GB",
            category: "smartphone",
            quantity: 15,
            cover:
              "https://www.phoneclick.it/img/catalogo/a25%205g%20128gb%20blue.jpg",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          {
            id: "3",
            isbn: "0-3733-1808-1",
            item: "APPLE - MacBook Air 13 M2 8-core CPU 8-core GPU 256GB SSD",
            category: "laptop",
            quantity: 7,
            cover:
              "https://pskmegastore.com/1296096-medium_default/apple-macbook-air-13-m1-8-core-cpu-7-core-gpu-256gb-argento.jpg",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
        ];
      });
    }, 500);
  });
};

export const getProductDetail = (id) => {
  console.log(id);
  return new Promise((resolve, reject) => {
    const productList = [
      {
        id: "1",
        isbn: "0-3733-1808-1",
        title: "APPLE - iPhone 15 128GB",
        category: "smartphone",
        quantity: 15,
        cover:
          "https://pskmegastore.com/1637896-medium_default/apple-iphone-15-128gb-nero.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: "2",
        isbn: "0-3733-1808-1",
        title: "SAMSUNG - GALAXY A25 5G 128GB",
        category: "smartphone",
        quantity: 15,
        cover:
          "https://www.phoneclick.it/img/catalogo/a25%205g%20128gb%20blue.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: "3",
        isbn: "0-3733-1808-1",
        title: "APPLE - MacBook Air 13 M2 8-core CPU 8-core GPU 256GB SSD",
        category: "laptop",
        quantity: 7,
        cover:
          "https://pskmegastore.com/1296096-medium_default/apple-macbook-air-13-m1-8-core-cpu-7-core-gpu-256gb-argento.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ];
    setTimeout(() => {
      const product = productList.find((item) => item.id === id);
      if (product) {
        resolve(product);
      } else {
        reject({ message: "product not found" });
      }
    }, 2000);
  });
};

// simulazione chiamata API per aggiungere un nuovo elemento (POST)
export const addItem = (body) => {
  // body rappresenta i dati dell'elemento da aggiungere
  return new Promise((resolve) => {
    // la funzione restituisce una nuova promessa (questo simula un'operazione asincrona)
    setTimeout(() => {
      console.log("Saving Product: ", body);
      // simulazione ritardo asincrono di 1000ms
      resolve({
        // dopo ritardo promessa risolta
        // funzione che restituisce l'oggetto
        ...body,
        id: self.crypto.randomUUID(), // contiene tutte prop di body + id randomico geneerato dal metodo self.crypto.randomUUID
      });
    }, 3000);
  });
};

export const editItem = (body) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Editing Product: ", body);

      resolve(...body);
    }, 3000);
  });
};

export const deleteItem = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Deleting Product: ", id);

      resolve(...id);
    }, 500);
  });
};
