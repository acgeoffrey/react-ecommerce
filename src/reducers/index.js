import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  ADD_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../actions";

const initialState = {
  list: [],
  cart: [],
};

export function products(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        list: action.products,
      };

    case ADD_PRODUCT:
      return {
        ...state,
        list: [action.product, ...state.list],
      };

    case UPDATE_PRODUCT:
      for (let i = 0; i < state.list.length; i++) {
        if (state.list[i].id === action.product.id) {
          state.list[i] = action.product;
        }
      }
      return {
        ...state,
        list: state.list,
      };

    case DELETE_PRODUCT:
      const filteredArray = state.list.filter(
        (product) => product.id !== action.product.id
      );
      console.log(filteredArray);
      return {
        ...state,
        list: filteredArray,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [action.product, ...state.cart],
      };

    case REMOVE_FROM_CART:
      const filteredCartArray = state.cart.filter(
        (product) => product.id !== action.product.id
      );
      return {
        ...state,
        cart: filteredCartArray,
      };

    default:
      return state;
  }
}

export default products;
