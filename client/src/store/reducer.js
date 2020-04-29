import { createStore, combineReducers } from "redux";

const cachedItems = localStorage.getItem("nitsuj_apparel_shopping_cart");

const cartState = {
  items: cachedItems ? JSON.parse(cachedItems) : [],
  count: 0,
  hover: null,
};

const setLocalStorage = (items) => {
  localStorage.setItem("nitsuj_apparel_shopping_cart", JSON.stringify(items));
};

const cartReducer = (state = cartState, action) => {
  let newItems;
  switch (action.type) {
    case "ADD":
      let newCount = state.count + 1;
      newItems = [
        ...state.items,
        {
          id: newCount,
          name: action.name,
          price: action.price,
          src: action.src,
        },
      ];
      setLocalStorage(newItems);
      return {
        count: newCount,
        items: newItems,
      };
    case "REMOVE":
      newItems = state.items.filter((i) => i.id !== action.id);
      setLocalStorage(newItems);
      return {
        ...state,
        items: newItems,
        hover: null,
      };
    case "CLEAR":
      newItems = [];
      setLocalStorage(newItems);
      return {
        ...state,
        items: newItems,
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
