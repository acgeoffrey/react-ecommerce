import { combineReducers } from "redux";

const initialState = {
  list: [],
  cart: [],
  showCart: false,
};

export function products(state = initialState, action) {
  return initialState;
}

export default products;
