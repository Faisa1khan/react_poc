import React, { useState } from "react";

const style={
    padding: '1em'
}

const Login = (props) => {
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const [error, setError] = useState(props.error);
    // derive error from props.error 
    if(props.error && error !== props.error)
        setError(props.error);

    const onSubmit = (e) => {
        e.preventDefault();
        if(!email)
            return setError('Email not given')
        if(!password)
            return setError('Password not given')
        props.login(email, password);
        setError('');   // clear error
    }
    return (
        <form className="border" style={style} onSubmit={onSubmit}>
            
            <div className="form-group">
                <label>Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    value={email}
                    onChange={(e) => changeEmail(e.target.value)}
                    placeholder='Sincere@april.biz'
                    />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    value={password} 
                    onChange={(e) => changePassword(e.target.value)}
                    placeholder='Sincere@april.biz'
                    />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            {props.loggingIn ? <div>Logging In!!!</div> : ''}
            {error ? <div>{error}</div> : ''}
        </form>
    )
}

export default Login;