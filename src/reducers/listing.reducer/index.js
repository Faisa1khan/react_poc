import { combineReducers } from "redux";

import data from "./data.reducer";
import filters from "./filters.reducer";
import flags from "./flags.reducer";
import modal from "./modal.reducer";

export default combineReducers({
    data,
    filters,
    modal,
    flags
})
