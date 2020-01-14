import axios from 'axios';
import { detailPageConstants } from "../constants";

export const detailPageActions = {
    getDetail
};


const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

function getDetail(email){
    return dispatch => {
        dispatch(request())
        axios({
            method: 'GET',
            url: `${USERS_URL}?email=${email}`
        })
        .then(res => res.data)
        .then(data => {
            dispatch(success({data: data[0]}))
            console.log(data);
        })
        .catch(error => dispatch(failure(error)));
    }

    function request(){return {type: detailPageConstants.GET_DETAIL_REQUEST}}
    function success(payload={}){return {type: detailPageConstants.GET_DETAIL_SUCCESS, payload}}
    function failure(error){return {type: detailPageConstants.GET_DETAIL_FAILURE, payload:{error}}}
}
