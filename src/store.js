import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
const middlwares = [thunk];

const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middlwares),
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

console.log(store);

export default store;
