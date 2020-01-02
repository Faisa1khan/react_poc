import axios from 'axios'
import { SET_DATA, SET_ACTIVE_PAGE, SET_ITEMS_PER_PAGES} from '../constants'

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
            console.log(res.data.length)
        })
        .catch((err)=>{
         console.log(err)

        })
    }
}

export {getData,setActivePage,setItemsPerPage}

