import { createStore, combineReducers } from "redux";

const cartState = {
  items: [],
  count: 0,
  hover: null
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
            title: action.title,
            size: action.size,
            price: action.price
          }
        ]
      };
    case "REMOVE":
      let index = state.items.findIndex(i => i.id === action.id);
      let newItems = [...state.items];
      newItems.splice(index, 1);
      return { ...state, items: newItems };
    case "HOVER":
      return { ...state, hover: action.src };
    default:
      return state;
  }
};

const reducers = combineReducers({ cart: cartReducer });

const store = createStore(reducers);

export default store;
