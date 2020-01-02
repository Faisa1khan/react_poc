import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunkMiddleWare from "redux-thunk";
import loggerMiddleWare from 'redux-logger'

function faisalMiddleWare(){
  return typeof(window) === "object" &&
    typeof(window.__REDUX_DEVTOOLS_EXTENSION__) !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
}

const store = createStore(
  reducer,
  applyMiddleware(
     loggerMiddleWare,
    thunkMiddleWare
    )
  
);

export default store;
