import { listingConstants } from "../constants";

const initialState = {
    data: []
}

export default function listing(state=initialState, action){
    switch(action.type){
        case listingConstants.GET_LISTING_REQUEST:
            return {
                loading: true 
            }
        case listingConstants.GET_LISTING_SUCCESS:
            return {
                data: action.data 
            }
        case listingConstants.GET_LISTING_FAILURE:
            return {
                error: action.error
            }
        default:
            return state;
    }
}
