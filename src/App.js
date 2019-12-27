import React from 'react';
import './App.css';
import {connect} from 'react-redux'
// import MultiLangText from './components/multi-lang/MultiLangText';
import LanguageSelector from './components/LanguageSelector';
import {IntlProvider, FormattedMessage} from 'react-intl'
import messages from './messages'

class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={
      
    }
     
    props.setLanguage(localStorage.lang)
    
  }

  
  
   
  
  render()
  {
       
    return (
      <IntlProvider 
      locale={this.props.currentLanguage}
       messages={messages[this.props.currentLanguage]}>
        <div className="App">
        <nav className="site-nav nav-padding">
             
             <div className="site-nav-left">
                <a><FormattedMessage id="nav.home" defaultMessage="Home" /></a>
                <a><FormattedMessage id="nav.about" defaultMessage="About Us" /></a>
                <a><FormattedMessage id="nav.contact" defaultMessage="Contact" /></a>
             </div>
             <div className="site-nav-right">
                <LanguageSelector />
             </div>                      
        </nav><br/>
       <center>
        <FormattedMessage id='text' defaultMessage='Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' />
       </center>
        
      </div>
      </IntlProvider>
    )
  }
}

const mapStateToProps=(store)=>{
  return{
    currentLanguage:store.language.currentLang
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    setLanguage:(language)=>{dispatch({type:'SET_LANGUAGE',language:language})}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
