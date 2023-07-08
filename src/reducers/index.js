import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  ADD_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_CART_QTY,
  DECREASE_CART_QTY,
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
      action.product.cart = 1;
      return {
        ...state,
        cart: [action.product, ...state.cart],
      };

    case INCREASE_CART_QTY:
      const newArray = state.cart;
      for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].id === action.product.id) {
          newArray[i].cart += 1;
        }
      }
      return {
        ...state,
        cart: newArray,
      };

    case DECREASE_CART_QTY:
      const newDecArray = state.cart;
      for (let i = 0; i < newDecArray.length; i++) {
        if (newDecArray[i].id === action.product.id) {
          if (newDecArray[i].cart > 0) {
            newDecArray[i].cart -= 1;
          }
        }
      }
      return {
        ...state,
        cart: newDecArray,
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
