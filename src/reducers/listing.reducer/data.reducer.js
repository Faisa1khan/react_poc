import { listingConstants } from "../../constants";

const initialState = {
    all: [],
    filtered: []
};

export default function data(state=initialState, action){
    switch(action.type){
        case listingConstants.GET_INITIAL_LISTING_REQUEST:
            return {};
        case listingConstants.GET_INITIAL_LISTING_SUCCESS:
            return {
                all: action.payload.data
            };
        case listingConstants.GET_INITIAL_LISTING_FAILURE:
            return {};
        case listingConstants.FILTER_LISTING:
            return {
                ...state,
                filtered: action.payload.filtered
            }
        default:
            return state;
    }
}