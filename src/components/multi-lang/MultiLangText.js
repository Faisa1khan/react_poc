import React from 'react'
import {withTranslation} from 'react-i18next'
 

class MultiLangText extends React.PureComponent {
     
    constructor(props)
    {
        super(props)
        this.state={
            language:null
        }
        console.log(props.i18n )
    }

     static getDerivedStateFromProps(newProps,prevState)
     {
         if(newProps.language!=prevState.language){
             
             newProps.i18n.changeLanguage(newProps.language)
              
             return {language:newProps.language}
         }
         
         return {language:prevState.language}
     }

    render(){
        const {t,i18n}=this.props
        
        return (
            <div>
                {t(this.props.content)} 

            </div>
        ) 
    }
}

export default withTranslation()(MultiLangText)