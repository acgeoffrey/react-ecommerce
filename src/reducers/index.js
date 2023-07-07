import { combineReducers } from "redux";
import { ADD_PRODUCTS } from "../actions";

const initialState = {
  list: [],
  cart: [],
};

export function products(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        list: action.products,
      };

    default:
      return state;
  }
}

export default products;
