import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
import { login } from '../../redux/reducer/user/actions';
// Component
import Login from '../../components/Login/Login';

class LoginContainer extends Component {
    constructor () {
        super();
        this.state = { }
    }

    handleChange = (property, value) => {
        console.log(property, value);
        this.setState({ [property]: value });
    }

    login = (e) => {
        e.preventDefault();
        console.log('login');
        // const { login, history } = this.props;
        // const { username, password } = this.state;
        // login({ username, password }, history);
    }

    render () {
        return <Login handleChange={ this.handleChange } login={ this.login } />
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = {
    login
};

export default connect( mapStateToProps, mapDispatchToProps )( LoginContainer );