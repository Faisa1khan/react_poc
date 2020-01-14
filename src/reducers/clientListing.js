import { SET_ITEMS_PER_PAGES, SET_FILTER, SET_ACTIVE_PAGE ,SET_DATA, SET_FILTERED_DATA,SET_MODE} from "../constants"


const initialState={
    data:[],
    filtered_data:[],
    itemsPerPage:5,
    filter:null,
    activePage:1,
    mode:'list'

}

const clientListingReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_DATA:return {...state,data:action.payload}
        case SET_ITEMS_PER_PAGES:return {...state,itemsPerPage:action.payload}
        case SET_FILTER:return {...state,filter:action.payload}
        case SET_FILTERED_DATA:return {...state,filtered_data:action.payload}
        case SET_ACTIVE_PAGE:return {...state,activePage:action.payload}
        case SET_MODE:return {...state,mode:action.payload}
        default:return state
    }
}

export default clientListingReducer