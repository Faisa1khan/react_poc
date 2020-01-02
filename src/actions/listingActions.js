import { listingConstants } from "../constants";
import axios from "axios";

export const listingActions = {
    getInitialListing
}

const DATA_URL = 'https://next.json-generator.com/api/json/get/Vyh1CuLJ_';

function getInitialListing(){
    const requestOption = {
        method: 'GET',
        url: DATA_URL,
    }
    return dispatch => {
        dispatch(request())
        return axios(requestOption)
            .then(res => res.data)
            .then(data => {
                if (data.length>0)
                    dispatch(success(data))
            })
            .catch(error => dispatch(failure(error)))
    }
    function request(){return {type: listingConstants.GET_LISTING_REQUEST}}
    function success(data){return {type: listingConstants.GET_LISTING_SUCCESS, data}}
    function failure(error){return {type: listingConstants.GET_LISTING_FAILURE, error}}
}