import { filterConstants, orderConstants } from "../../constants";

const initialState = {
    bySearch: undefined,
    byProperty: {
        gender: undefined,
        status: undefined
    },
    sort: {
        by: undefined,
        order: orderConstants.ASC
    }
}

export default function filters(state=initialState, action){
    switch(action.type){
        case filterConstants.SET_SEARCH_FILTER:
            return {
                ...state,
                bySearch: action.payload.search
            };
        case filterConstants.SET_PROPERTY_FILTER:
            const { property, value } = action.payload;
            let byProperty = {...state.byProperty};
            byProperty[property] = value;
            return {
                ...state,
                byProperty
            };
        case filterConstants.SET_SORT_FILTER:
            const { sortBy, order } = action.payload;
            let sort = {...state.sort};
            sort.by = sortBy;
            sort.order = order;
            return {
                ...state,
                sort
            };
        case filterConstants.RESET_FILTERS:
            return initialState; 
        default:
            return state;
    }
}