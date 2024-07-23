export const getProductList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: "1",
        isbn: "0-3733-1808-1",
        item: "Panorama XTi by Babylo 2-in-1 Travel System with Car Seat & ISOFix Base",
        category: "Pram",
        quantity: 5,
      });
    }, 2000);
  });
};
