import { combineReducers } from "redux";
import language from "./changeLanguage";
import { FetchData } from "./FetchData";
export default combineReducers({
  language,
  FetchData
});
