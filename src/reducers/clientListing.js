import { SET_ITEMS_PER_PAGES, SET_FILTER, SET_ACTIVE_PAGE ,SET_DATA} from "../constants"

const initialState={
    data:[],
    itemsPerPage:5,
    filter:{},
    activePage:1

}

const clientListingReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_DATA:return {...state,data:action.payload}
        case SET_ITEMS_PER_PAGES:return {...state,itemsPerPage:action.payload}
        case SET_FILTER:return {...state,filter:action.payload}
        case SET_ACTIVE_PAGE:return {...state,activePage:action.payload}
        default:return state
    }
}

export default clientListingReducer