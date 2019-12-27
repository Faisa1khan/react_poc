/*
    This reducer is for managing website language 
    Default language is EN
    currentLang is modified using a dropdown
*/

const initialState={
    currentLang:null
}

const languageReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'SET_LANGUAGE':return {...state,currentLang:action.language}
        default:return state
    }
}

export default languageReducer