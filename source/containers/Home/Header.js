import React from 'react';
import propTypes from 'prop-types';
import Block from '../../components/Block';
import Headline from '../../components/Headline';
import Thumbnail from '../../components/Thumbnail';
import Form from './Form';
import './assets/styles/header.scss';

const Header = props => {
  const h = props.data;

  return (
    <header className="site-header" style={{ backgroundImage: 'url(' + h.hero + ')' }}>
      <div className="site-header__container">
        <section className="site-header__section">
          <Headline title={h.title} subtitle={h.subtitle} />
          <Thumbnail src={h.featured} alt={h.title} />
        </section>
        <section className="site-header__section u-hide@small">
          <Block shadow>
            <Form />
          </Block>
        </section>
      </div>
    </header>
  );
};

Header.propTypes = {
  data: propTypes.object.isRequired,
};

export default Header;
