export const getProductList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(() => {
        return [
          {
            id: "1",
            isbn: "0-3733-1808-1",
            item: "APPLE - iPhone 15 128GB",
            category: "smartphone",
            quantity: 15,
          },
          {
            id: "2",
            isbn: "0-3733-1808-1",
            item: "SAMSUNG - GALAXY A25 5G 128GB",
            category: "smartphone",
            quantity: 15,
          },
          {
            id: "3",
            isbn: "0-3733-1808-1",
            item: "APPLE - MacBook Air 13 M2 8-core CPU 8-core GPU 256GB SSD",
            category: "laptop",
            quantity: 7,
          },
        ];
      });
    }, 2000);
  });
};
