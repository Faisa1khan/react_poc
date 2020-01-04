import axios from 'axios'
import { SET_DATA, SET_ACTIVE_PAGE, SET_ITEMS_PER_PAGES,SET_FILTER,SET_FILTERED_DATA} from '../constants'
import {  getFilteredData } from '../utils/FilterUtil'

const setData=(data)=>{
    return {type:SET_DATA,payload:data}
}

const setActivePage=(page)=>{
    return {type:SET_ACTIVE_PAGE,payload:page}
}

const setItemsPerPage=(items)=>{
    return dispatch=>{
        
        dispatch(setActivePage(1))
        dispatch({type:SET_ITEMS_PER_PAGES,payload:items})
        
    }
}

const getData=()=>{
    return dispatch=>{
        axios.get('https://next.json-generator.com/api/json/get/Vyh1CuLJ_')
        .then((res)=>{
            dispatch(setData(res.data))
            dispatch({type:SET_FILTERED_DATA,payload:res.data})
             
        })
        .catch((err)=>{
         console.log(err)

        })
    }
}

const setFilter=(filter)=>{
    return {type:SET_FILTER,payload:filter}
}

const setFilteredData=(current_data,default_data,filter)=>{
    
     const filtered_data=getFilteredData(current_data,default_data,filter)
     return dispatch=>{
         dispatch(setFilter(filter))
         dispatch({type:SET_FILTERED_DATA,payload:filtered_data})
         dispatch(setActivePage(1))
     }
}

export {getData,setActivePage,setItemsPerPage,setFilteredData}

