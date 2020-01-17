import React from "react";
import { connect } from "react-redux";
import Login from "../../components/Login";

import { authActions } from "../../actions";

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

const con = connect(mapState, mapActions)(LoginPage);
export { con as LoginPage };