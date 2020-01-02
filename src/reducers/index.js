import { combineReducers } from "redux";
import language from "./changeLanguage";
import clientListing from './clientListing'
export default combineReducers({
  language,
  clientListing
});
