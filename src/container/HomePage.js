import React, { Component } from 'react';
import { IntlProvider,FormattedMessage } from 'react-intl'
import messages from '../messages'
import NavBar from '../components/NavBar';
import { connect } from 'react-redux'


class HomePage extends Component {
    constructor(props) {
        super(props);
        props.setLanguage(localStorage.lang)
    }
    render() {
        return (
            <IntlProvider  
        locale={this.props.currentLanguage}
        messages={messages[this.props.currentLanguage]}>
        <div className="App">
          <NavBar />
          <br />
          <center>
            <FormattedMessage id='text' defaultMessage='Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' />
          </center>

        </div>
      </IntlProvider>
        );
    }
}

const mapStateToProps = (store) => {
    return {
      currentLanguage: store.language.currentLang
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setLanguage: (language) => { dispatch({ type: 'SET_LANGUAGE', language: language }) }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);