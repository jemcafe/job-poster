import React from 'react';
import PropTypes from 'prop-types';
//
import Aux from '../../hoc/Aux';
// Components
import MainHeader from '../../containers/MainHeaderContainer/MainHeaderContainer';
import Footer from '../../components/Footer/Footer';

export default function Home (props) {
    return (
        <Aux>
            <MainHeader history={ props.history } match={ props.match } />
            <main className="home">
                <div className="container">
                    HOME COMPONENT
                </div>
            </main>
            <Footer />
        </Aux>
    )
}

Home.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
}