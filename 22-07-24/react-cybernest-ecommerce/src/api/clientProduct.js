export const getProductList = async () => {
  try {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=20"
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Failed to view items list");
  }
};

export const getProductDetail = async (id) => {
  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Failed to view item detail");
  }
};

// export const addItem = async (formData) => {
//   try {
//     const response = await fetch("https://api.escuelajs.co/api/v1/products", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // body: JSON.stringify({ id: self.crypto.randomUUID(), ...body }),
//       body: JSON.stringify(formData),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       console.log("Error Data:", errorData);
//       throw new Error("Failed to add item");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to add item");
//   }
// };

export const deleteItem = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete item");
  }
};

export const editItem = async (id, body) => {
  try {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...body }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || "Failed to edit item");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to edit item");
  }
};
