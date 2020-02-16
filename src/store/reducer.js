import { createStore, combineReducers } from "redux";

const cartState = {
  items: []
};

const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        items: [
          ...state.items,
          {
            title: action.title,
            size: action.size,
            price: action.price
          }
        ]
      };
    case "DECREMENT":
      return { value: state.items - 1 };
    default:
      return state;
  }
};

const reducers = combineReducers({ cart: cartReducer });

const store = createStore(reducers);

export default store;
