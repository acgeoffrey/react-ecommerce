//action types
export const ADD_PRODUCTS = "ADD_PRODUCTS";

//action creators
export function addProducts(products) {
  return {
    type: ADD_PRODUCTS,
    products,
  };
}
