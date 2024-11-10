// Task 1

//Using named exports to define an array of assets to be exported
export const assets = [
    { id: 1, name: "EA", type: "stock", price: 500, quantity: 50 },
    { id: 2, name: "Mattel", type: "bond", price: 750, quantity: 300 },
    { id: 3, name: "Apple", type: "stock", price: 600, quantity: 150 },
  ];
  
  // Export function to get asset details by id
  export function getProductById(id) {
      return productList.find(product => product.id === id);
  }