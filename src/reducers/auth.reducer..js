import { authConstants } from "../constants";

const initialState = {
    email: undefined
};

export default function auth(state=initialState, action){
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            return {
                loggingIn: true
            };
        case authConstants.LOGIN_SUCCESS:
            const { email } = action.payload;
            return {
                email,
                loggedIn: true
            };
        case authConstants.LOGIN_FAILURE:
            return {
                error: action.payload.error
            };
        case authConstants.LOGOUT:
            return {};
        default:
            return state;
    }
}
