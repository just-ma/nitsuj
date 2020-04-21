import { createStore, combineReducers } from "redux";

const cartState = {
  items: [],
  count: 0,
  hover: null,
};

const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case "ADD":
      let newCount = state.count + 1;
      return {
        count: newCount,
        items: [
          ...state.items,
          {
            id: newCount,
            name: action.name,
            size: action.size,
            price: action.price,
            sku: action.sku,
          },
        ],
      };
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.id),
        hover: null,
      };
    case "HOVER":
      return { ...state, hover: action.src };
    default:
      return state;
  }
};

const reducers = combineReducers({ cart: cartReducer });

const store = createStore(reducers);

export default store;
