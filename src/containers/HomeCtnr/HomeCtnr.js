import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Component
import Home from '../../components/Home/Home';

class HomeContainer extends Component {
    constructor () {
        super();
        this.state = { }
    }

    render () {
        const { history, match } = this.props;
        return <Home history={ history } match={ match }/>
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = { };

export default connect( mapStateToProps, mapDispatchToProps )( HomeContainer );