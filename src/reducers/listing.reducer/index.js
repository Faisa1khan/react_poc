import { combineReducers } from "redux";

import data from "./data.reducer";
import filters from "./filters.reducer";
import flags from "./flags.reducer";

export default combineReducers({
    data,
    filters,
    flags
})
