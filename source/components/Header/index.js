import React from 'react';
import data from '../../constants/data';
import Block from '../../containers/Block';
import Headline from '../Headline';
import FormHome from './formHome';
import './assets/header.scss';

const Header = () => (
  <header className="site-header" style={{ backgroundImage: 'url(' + data.header.hero + ')' }}>
    <div className="site-header__container">
      <section className="site-header__section">
        <Headline title={data.header.title} subtitle={data.header.subtitle} />
        <figure className="site-header__image">
          <img src={data.header.featured} alt={data.header.title} />
        </figure>
      </section>
      <section className="site-header__section u-hide@small">
        <Block shadow>
          <FormHome />
        </Block>
      </section>
    </div>
  </header>
);

export default Header;
