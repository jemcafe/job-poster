import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
// Component
import MainHeader from '../../components/MainHeader/MainHeader';

class MainHeaderContainer extends Component {
    constructor () {
        super();
        this.state = { }
    }

    render () {
        const { history, match } = this.props;
        return <MainHeader history={ history } match={ match }/>
    }
}

MainHeaderContainer.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(MainHeaderContainer);