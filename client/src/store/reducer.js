import { createStore, combineReducers } from "redux";

const cachedItems = localStorage.getItem("nitsuj_apparel_shopping_cart");

const cartState = {
  items: cachedItems ? JSON.parse(cachedItems) : [],
  count: 0,
  hover: null,
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
      localStorage.setItem(
        "nitsuj_apparel_shopping_cart",
        JSON.stringify(newItems)
      );
      return {
        count: newCount,
        items: newItems,
      };
    case "REMOVE":
      newItems = state.items.filter((i) => i.id !== action.id);
      localStorage.setItem(
        "nitsuj_apparel_shopping_cart",
        JSON.stringify(newItems)
      );
      return {
        ...state,
        items: newItems,
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
