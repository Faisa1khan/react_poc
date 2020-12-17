import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import apiMiddleware from "./middleware/api";
const middlwares = [apiMiddleware, thunk];

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

window.store = store;
export default store;
