import { authConstants } from "../constants";

export default function auth(state={}, action){
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            return {
                loggingIn: true
            };
        case authConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true
            };
        case authConstants.LOGIN_FAILURE:
            return {
                error: action.error
            };
        case authConstants.LOGOUT:
            return {};
        default:
            return state;
    }
}
