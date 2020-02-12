import { createStore, combineReducers } from "redux";

const counterState = {
  value: 0
}

const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const reducers = combineReducers({ counter: counterReducer });

const store = createStore(reducers);

export default store;
