import React, { useState } from "react";
import { connect } from "react-redux";
import Login from "../Login";

import {authActions} from "../../actions";

const style = {
    flex: '1',
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const LoginPage = (props) => {
    return (
        <div className="login-page" style={style}>
            <Login 
                login={props.login}
                loggingIn={props.loggingIn}
                error={props.error}
                />
        </div>
    )
}

const mapState = state => ({
    loggingIn: state.auth.loggingIn || false,
    error: state.auth.error || ''
})
const mapActions = {
    login: authActions.login
}

export default connect(mapState, mapActions)(LoginPage);