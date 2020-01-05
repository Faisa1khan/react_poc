import { listingConstants } from "../../constants";

// flags for loading initial listing data 
const initialState = {
    loading: false,
    loaded: false,
    error: undefined
}

export default function flags(state=initialState, action){
    switch(action.type){
        case listingConstants.GET_INITIAL_LISTING_REQUEST:
            return {
                loading: true
            };
        case listingConstants.GET_INITIAL_LISTING_SUCCESS:
            return {
                loaded: true
            };
        case listingConstants.GET_INITIAL_LISTING_FAILURE:
            return {
                error: action.payload.error
            };
        default:
            return state;
    }
}