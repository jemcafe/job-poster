import React from 'react';
import PropTypes from 'prop-types';

function Login (props) {
    const { handleChange, login } = props;
    
    return (
        <div className="login">
            <div className="container">
                <h3>Sign In</h3>
                <form onSubmit={ login }>
                    <input placeholder="Username" onChange={(e) => handleChange('username', e.target.value)}/>
                    <input placeholder="Password" onChange={(e) => handleChange('password', e.target.value)} type="password"/>
                    <div className="submit-btn">
                        <input className="btn-1" type="submit" value="Sign In"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

Login.propTypes = {
    handleChange: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired
}

export default Login;