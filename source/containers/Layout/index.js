import React from 'react';
import propTypes from 'prop-types';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const Layout = props => {
  return (
    <main id={props.id} className={props.className} role="main">
      <Navigation />
      {props.children}
      <Footer />
    </main>
  );
};

Layout.propTypes = {
  id: propTypes.string,
  className: propTypes.string,
  children: propTypes.node.isRequired
};

export default Layout;
