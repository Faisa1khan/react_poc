import React from 'react'
import {connect} from 'react-redux'

const LanguageSelector = (props) => (
    
    <select onChange={(e)=>{
        localStorage.setItem('lang',e.target.value)
        props.setLanguage(e.target.value)
    }} defaultValue={localStorage.getItem('lang')} >
        <option value="en">English</option>
        <option value="pl">Polski</option>

    </select>
);

const mapStateToProps=(store)=>{
    return{
        language:store.language.currentLang
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        setLanguage:(language)=>dispatch({type:'SET_LANGUAGE',language:language})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LanguageSelector);