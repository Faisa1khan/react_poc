import { combineReducers } from "redux";

import language from "./changeLanguage";
import auth from "./auth.reducer.";
import listing from "./listing.reducer"; 
import detailPage from "./detailPage.reducer";

export default combineReducers({
  language,
  auth,
  listing,
  detailPage
});
