//action types
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_CART_QTY = "INCREASE_CART_QTY";
export const DECREASE_CART_QTY = "DECREASE_CART_QTY";

//action creators
export function getProducts(products) {
  return {
    type: GET_PRODUCTS,
    products,
  };
}

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    product,
  };
}

export function updateProduct(product) {
  return {
    type: UPDATE_PRODUCT,
    product,
  };
}

export function deleteProduct(product) {
  return {
    type: DELETE_PRODUCT,
    product,
  };
}

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product,
  };
}

export function increaseCartQty(product) {
  return {
    type: INCREASE_CART_QTY,
    product,
  };
}

export function decreaseCartQty(product) {
  return {
    type: DECREASE_CART_QTY,
    product,
  };
}

export function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    product,
  };
}
