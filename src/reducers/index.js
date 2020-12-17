import { combineReducers } from "redux";
import language from "./changeLanguage";
import { FetchData } from "./FetchData";
import api from "./api";
export default combineReducers({
  language,
  api,
  FetchData
});
