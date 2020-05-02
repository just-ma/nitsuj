import { createStore, combineReducers } from "redux";

const cachedItems = localStorage.getItem("nitsuj_apparel_shopping_cart");
const cachedCount = localStorage.getItem("nitsuj_apparel_cart_count");

const cartState = {
  items: cachedItems ? JSON.parse(cachedItems) : [],
  count: cachedCount || 0,
  hover: null,
};

const setLocalStorage = (items, count) => {
  localStorage.setItem("nitsuj_apparel_shopping_cart", JSON.stringify(items));
  localStorage.setItem("nitsuj_apparel_cart_count", count);
};

const cartReducer = (state = cartState, action) => {
  let newItems;
  let newCount;
  switch (action.type) {
    case "ADD":
      newCount = state.count + 1;
      newItems = [
        ...state.items,
        {
          id: newCount,
          name: action.name,
          price: action.price,
          src: action.src,
        },
      ];
      setLocalStorage(newItems, newCount);
      return {
        count: newCount,
        items: newItems,
      };
    case "REMOVE":
      newItems = state.items.filter((i) => i.id !== action.id);
      setLocalStorage(newItems, state.count);
      return {
        ...state,
        items: newItems,
        hover: null,
      };
    case "CLEAR":
      newItems = [];
      newCount = 0;
      setLocalStorage(newItems, newCount);
      return {
        ...state,
        items: newItems,
        count: newCount,
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
