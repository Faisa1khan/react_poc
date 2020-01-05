import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from "./reducers";

function faishMiddleware(){
  
  return typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  ;
}

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    faishMiddleware,
    thunkMiddleware,
    loggerMiddleware        // log all actions
    )
);

export default store;
