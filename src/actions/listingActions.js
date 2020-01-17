import { 
    listingConstants, 
    filterConstants,
    orderConstants
 } from "../constants";
import { 
    filterArrBySearch, 
    filterArrByProperty, 
    sortArrByProperty }from "../utils";
import axios from "axios";

export const listingActions = {
    getInitialListing,
    filterListing,
    setSearchFilter,
    setPropertyFilter,
    setSortFilter,
    resetFilters
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
                if (data.length>0){
                    return dispatch(success(data))  
                }
                dispatch(failure('response data empty'));
            })
            .catch(error => dispatch(failure(error)))
    }
    function request(){return {type: listingConstants.GET_INITIAL_LISTING_REQUEST}}
    function success(data){return {type: listingConstants.GET_INITIAL_LISTING_SUCCESS, payload:{data}}}
    function failure(error){return {type: listingConstants.GET_INITIAL_LISTING_FAILURE, payload:{error}}}
}

function filterListing(arr, filters){
    let filtered = [...arr];
    
    //console.log(arr, filters);
    const { byProperty, bySearch, sort } = filters;
    if(bySearch && bySearch.length >= 3)
        filtered = filterArrBySearch(filtered, bySearch);
    if(byProperty){
        for(const property of Object.keys(byProperty)){
            if(byProperty[property])
                filtered = filterArrByProperty(filtered, property, byProperty[property])
        }
    }
    if(sort && sort.by){
        const bool = (sort.order === orderConstants.ASC) ? false : true;
        filtered = sortArrByProperty(filtered, sort.by, bool);
    }

    return {
        type: listingConstants.FILTER_LISTING,
        payload: {filtered}
    }
}

function setSearchFilter(search){
    return {
        type: filterConstants.SET_SEARCH_FILTER,
        payload: {search}
    }
}

// ex- ('gender', 'male')
function setPropertyFilter(property, value){
    return {
        type: filterConstants.SET_PROPERTY_FILTER,
        payload: {
            property,
            value
        }
    }
}

// ex- ('ctc', 'ASCENDING')
function setSortFilter(sortBy, order){
    return {
        type: filterConstants.SET_SORT_FILTER,
        payload: {
            sortBy,
            order
        }
    }
}
function resetFilters(){
    return {
        type: filterConstants.RESET_FILTERS
    }
}