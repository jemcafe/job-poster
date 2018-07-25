import React, { Fragment as Aux } from 'react';
import PropTypes from 'prop-types';
// Components
import MainHeader from '../../containers/MainHeaderCtnr/MainHeaderCtnr';
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