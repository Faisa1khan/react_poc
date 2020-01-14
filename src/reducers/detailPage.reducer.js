import { detailPageConstants } from "../constants";

const initialState = {
    user: {},
    loading: false,
    loaded: false,
    error: undefined
}

export default function detailPage(state=initialState, action){
    switch(action.type){
        case detailPageConstants.GET_DETAIL_REQUEST:
            return {
                loading: true
            };
        case detailPageConstants.GET_DETAIL_SUCCESS:
            const { data } = action.payload;
            return {
                user: data,
                loading: false,
                loaded: true
            };
        case detailPageConstants.GET_DETAIL_FAILURE:
            const { error } = action.payload;
            return {
                error
            };
        default:
            return state;
    }
}