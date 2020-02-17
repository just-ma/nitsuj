import { createStore, combineReducers } from "redux";

const cartState = {
  items: [],
  count: 0
};

const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case "INCREMENT":
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
    case "DECREMENT":
      let index = state.items.findIndex(i => i.id === action.id);
      let newItems = [...state.items];
      newItems.splice(index, 1);
      return { ...state, items: newItems };
    default:
      return state;
  }
};

const reducers = combineReducers({ cart: cartReducer });

const store = createStore(reducers);

export default store;
