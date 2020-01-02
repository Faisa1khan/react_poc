import axios from "axios";
import { authConstants } from "../constants"; 
//import { handleAjaxResponse } from "../utils";
import { history } from "../utils";

const USERS_URL = 'https://api.myjson.com/bins/qb0e8';

export const authActions = {
    login,
    logout
}

function login(email, password){
    const requestOption = {
        method: 'GET',
        url: USERS_URL,
    }
    return dispatch => {
        dispatch(request())
        return axios(requestOption)
            .then(res => res.data)
            .then(users => {
                const foundUser = users.find(user => user.email === email); 
                if(!foundUser)
                    return dispatch(failure('user not found'));
                if(foundUser.password !== password)
                    return dispatch(failure('password did not matched'));

                dispatch(success());
                localStorage.setItem('user', JSON.stringify({
                    token: 'abcdef'
                }));
                history.push('/client-list');
            })
            .catch(error => dispatch(failure(error)));
    }
    function request(){return {type: authConstants.LOGIN_REQUEST}}
    function success(){return {type: authConstants.LOGIN_SUCCESS}}
    function failure(error){return {type: authConstants.LOGIN_FAILURE, error}}
}

function logout(){
    localStorage.removeItem('user');
    history.push('/');
    return {
        type: authConstants.LOGOUT
    };
}